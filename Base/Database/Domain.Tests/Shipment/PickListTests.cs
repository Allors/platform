// <copyright file="PickListTests.cs" company="Allors bvba">
// Copyright (c) Allors bvba. All rights reserved.
// Licensed under the LGPL license. See LICENSE file in the project root for full license information.
// </copyright>
// <summary>Defines the MediaTests type.</summary>

namespace Allors.Domain
{
    using System.Linq;
    using Allors.Meta;
    using Xunit;

    public class PickListTests : DomainTest
    {
        [Fact]
        public void GivenPickListBuilder_WhenBuild_ThenPostBuildRelationsMustExist()
        {
            var store = this.Session.Extent<Store>().First;
            store.IsImmediatelyPicked = false;

            var pickList = new PickListBuilder(this.Session).Build();

            this.Session.Derive();

            Assert.Equal(new PickListStates(this.Session).Created, pickList.PickListState);
        }

        [Fact]
        public void GivenPickList_WhenPicked_ThenInventoryIsAdjustedAndOrderItemsQuantityPickedIsSet()
        {
            var store = this.Session.Extent<Store>().First;
            store.IsImmediatelyPicked = false;

            var mechelen = new CityBuilder(this.Session).WithName("Mechelen").Build();
            var mechelenAddress = new PostalAddressBuilder(this.Session).WithPostalAddressBoundary(mechelen)
                .WithAddress1("Haverwerf 15").Build();
            var shipToMechelen = new PartyContactMechanismBuilder(this.Session)
                .WithContactMechanism(mechelenAddress)
                .WithContactPurpose(new ContactMechanismPurposes(this.Session).ShippingAddress)
                .WithUseAsDefault(true)
                .Build();

            var supplier = new OrganisationBuilder(this.Session).WithName("supplier").Build();
            var customer = new PersonBuilder(this.Session).WithLastName("person1")
                .WithPartyContactMechanism(shipToMechelen).Build();

            new CustomerRelationshipBuilder(this.Session).WithFromDate(this.Session.Now()).WithCustomer(customer)
                .Build();

            new SupplierRelationshipBuilder(this.Session)
                .WithSupplier(supplier)
                .WithFromDate(this.Session.Now())
                .Build();

            var good1 = new NonUnifiedGoods(this.Session).FindBy(M.Good.Name, "good1");
            var good2 = new NonUnifiedGoods(this.Session).FindBy(M.Good.Name, "good2");

            new SupplierOfferingBuilder(this.Session)
                .WithPart(good1.Part)
                .WithSupplier(supplier)
                .WithFromDate(this.Session.Now())
                .WithUnitOfMeasure(new UnitsOfMeasure(this.Session).Piece)
                .WithCurrency(new Currencies(this.Session).FindBy(M.Currency.IsoCode, "EUR"))
                .WithPrice(7)
                .Build();

            this.Session.Derive();

            new InventoryItemTransactionBuilder(this.Session).WithQuantity(100)
                .WithReason(new InventoryTransactionReasons(this.Session).Unknown).WithPart(good1.Part).Build();
            new InventoryItemTransactionBuilder(this.Session).WithQuantity(100)
                .WithReason(new InventoryTransactionReasons(this.Session).Unknown).WithPart(good2.Part).Build();

            this.Session.Derive();

            var good1Inventory = (NonSerialisedInventoryItem)good1.Part.InventoryItemsWherePart.First;
            var good2Inventory = (NonSerialisedInventoryItem)good2.Part.InventoryItemsWherePart.First;

            var colorWhite = new ColourBuilder(this.Session)
                .WithName("white")
                .Build();
            var extraLarge = new SizeBuilder(this.Session)
                .WithName("Extra large")
                .Build();

            var order = new SalesOrderBuilder(this.Session)
                .WithBillToCustomer(customer)
                .WithShipToCustomer(customer)
                .WithVatRegime(new VatRegimes(this.Session).Export)
                .Build();

            var item1 = new SalesOrderItemBuilder(this.Session).WithProduct(good1).WithQuantityOrdered(1)
                .WithAssignedUnitPrice(15).Build();
            var item2 = new SalesOrderItemBuilder(this.Session)
                .WithInvoiceItemType(new InvoiceItemTypes(this.Session).ProductFeatureItem)
                .WithProductFeature(colorWhite).WithQuantityOrdered(1).WithAssignedUnitPrice(15).Build();
            var item3 = new SalesOrderItemBuilder(this.Session)
                .WithInvoiceItemType(new InvoiceItemTypes(this.Session).ProductFeatureItem)
                .WithProductFeature(extraLarge).WithQuantityOrdered(1).WithAssignedUnitPrice(15).Build();
            item1.AddOrderedWithFeature(item2);
            item1.AddOrderedWithFeature(item3);
            var item4 = new SalesOrderItemBuilder(this.Session).WithProduct(good1).WithQuantityOrdered(2)
                .WithAssignedUnitPrice(15).Build();
            var item5 = new SalesOrderItemBuilder(this.Session).WithProduct(good2).WithQuantityOrdered(5)
                .WithAssignedUnitPrice(15).Build();
            order.AddSalesOrderItem(item1);
            order.AddSalesOrderItem(item2);
            order.AddSalesOrderItem(item3);
            order.AddSalesOrderItem(item4);
            order.AddSalesOrderItem(item5);

            this.Session.Derive();

            order.Confirm();

            this.Session.Derive();

            var shipment = (CustomerShipment)mechelenAddress.ShipmentsWhereShipToAddress[0];

            var pickList = good1.Part.InventoryItemsWherePart[0].PickListItemsWhereInventoryItem[0]
                .PickListWherePickListItem;
            pickList.Picker = new People(this.Session).FindBy(M.Person.LastName, "orderProcessor");

            //// item5: only 4 out of 5 are actually picked
            foreach (PickListItem pickListItem in pickList.PickListItems)
            {
                if (pickListItem.Quantity == 5)
                {
                    pickListItem.QuantityPicked = 4;
                }
            }

            pickList.SetPicked();

            this.Session.Derive();

            //// all orderitems have same physical finished good, so there is only one picklist item.
            Assert.Equal(1, item1.QuantityReserved);
            Assert.Equal(0, item1.QuantityRequestsShipping);
            Assert.Equal(2, item4.QuantityReserved);
            Assert.Equal(0, item4.QuantityRequestsShipping);
            Assert.Equal(5, item5.QuantityReserved);
            Assert.Equal(0, item5.QuantityRequestsShipping);
            Assert.Equal(97, good1Inventory.QuantityOnHand);
            Assert.Equal(0, good1Inventory.QuantityCommittedOut);
            Assert.Equal(96, good2Inventory.QuantityOnHand);
            Assert.Equal(1, good2Inventory.QuantityCommittedOut);
        }

        [Fact]
        public void GivenPickList_WhenActualQuantityPickedIsLess_ThenShipmentItemQuantityIsAdjusted()
        {
            var store = this.Session.Extent<Store>().First;
            store.IsImmediatelyPicked = false;

            var mechelen = new CityBuilder(this.Session).WithName("Mechelen").Build();
            var mechelenAddress = new PostalAddressBuilder(this.Session).WithPostalAddressBoundary(mechelen)
                .WithAddress1("Haverwerf 15").Build();
            var shipToMechelen = new PartyContactMechanismBuilder(this.Session)
                .WithContactMechanism(mechelenAddress)
                .WithContactPurpose(new ContactMechanismPurposes(this.Session).ShippingAddress)
                .WithUseAsDefault(true)
                .Build();

            var supplier = new OrganisationBuilder(this.Session).WithName("supplier").Build();
            var customer = new PersonBuilder(this.Session).WithLastName("person1")
                .WithPartyContactMechanism(shipToMechelen).Build();

            new CustomerRelationshipBuilder(this.Session).WithFromDate(this.Session.Now()).WithCustomer(customer)
                .Build();

            new SupplierRelationshipBuilder(this.Session)
                .WithSupplier(supplier)
                .WithFromDate(this.Session.Now())
                .Build();

            var good1 = new NonUnifiedGoods(this.Session).FindBy(M.Good.Name, "good1");
            var good2 = new NonUnifiedGoods(this.Session).FindBy(M.Good.Name, "good2");

            new SupplierOfferingBuilder(this.Session)
                .WithPart(good1.Part)
                .WithSupplier(supplier)
                .WithFromDate(this.Session.Now())
                .WithUnitOfMeasure(new UnitsOfMeasure(this.Session).Piece)
                .WithPrice(7)
                .WithCurrency(new Currencies(this.Session).FindBy(M.Currency.IsoCode, "EUR"))
                .Build();

            new SupplierOfferingBuilder(this.Session)
                .WithPart(good2.Part)
                .WithSupplier(supplier)
                .WithFromDate(this.Session.Now())
                .WithUnitOfMeasure(new UnitsOfMeasure(this.Session).Piece)
                .WithPrice(7)
                .WithCurrency(new Currencies(this.Session).FindBy(M.Currency.IsoCode, "EUR"))
                .Build();

            this.Session.Derive();

            new InventoryItemTransactionBuilder(this.Session).WithQuantity(100)
                .WithReason(new InventoryTransactionReasons(this.Session).Unknown).WithPart(good1.Part).Build();
            new InventoryItemTransactionBuilder(this.Session).WithQuantity(100)
                .WithReason(new InventoryTransactionReasons(this.Session).Unknown).WithPart(good2.Part).Build();

            this.Session.Derive();

            var order = new SalesOrderBuilder(this.Session)
                .WithBillToCustomer(customer)
                .WithShipToCustomer(customer)
                .Build();

            var item1 = new SalesOrderItemBuilder(this.Session).WithProduct(good1).WithQuantityOrdered(1)
                .WithAssignedUnitPrice(15).Build();
            var item2 = new SalesOrderItemBuilder(this.Session).WithProduct(good1).WithQuantityOrdered(2)
                .WithAssignedUnitPrice(15).Build();
            var item3 = new SalesOrderItemBuilder(this.Session).WithProduct(good2).WithQuantityOrdered(5)
                .WithAssignedUnitPrice(15).Build();
            order.AddSalesOrderItem(item1);
            order.AddSalesOrderItem(item2);
            order.AddSalesOrderItem(item3);

            this.Session.Derive();

            order.Confirm();

            this.Session.Derive();

            var pickList = good1.Part.InventoryItemsWherePart[0].PickListItemsWhereInventoryItem[0]
                .PickListWherePickListItem;
            pickList.Picker = new People(this.Session).FindBy(M.Person.LastName, "orderProcessor");

            //// item3: only 4 out of 5 are actually picked
            PickListItem adjustedPicklistItem = null;
            foreach (PickListItem pickListItem in pickList.PickListItems)
            {
                if (pickListItem.Quantity == 5)
                {
                    adjustedPicklistItem = pickListItem;
                }
            }

            var itemIssuance = adjustedPicklistItem.ItemIssuancesWherePickListItem[0];
            var shipmentItem = adjustedPicklistItem.ItemIssuancesWherePickListItem[0].ShipmentItem;
            var shipment = shipmentItem.ShipmentWhereShipmentItem;

            Assert.Equal(2, shipment.ShipmentItems.Count);
            Assert.Equal(5, itemIssuance.Quantity);
            Assert.Equal(5, shipmentItem.Quantity);
            Assert.Equal(5, item3.QuantityPendingShipment);

            adjustedPicklistItem.QuantityPicked = 4;

            pickList.SetPicked();

            var derivation = new Logging.Derivation(
                this.Session,
                new DerivationConfig
                {
                    DerivationLogFunc = () => new CustomListDerivationLog(),
                });

            derivation.Derive();

            // this.Session.Derive();

            // When SalesOrder is derived 1 quantity is requested for shipping (because inventory is available and quantity ordered (5) is greater then quantity pending shipment (4)
            // A new shipment item is created with quantity 1 and QuantityPendingShipment remains 5
            Assert.Equal(4, itemIssuance.Quantity);
            Assert.Equal(4, shipmentItem.Quantity);
            Assert.Equal(3, shipment.ShipmentItems.Count);
            Assert.Equal(1, shipment.ShipmentItems.Last().Quantity);
            Assert.Equal(5, item3.QuantityPendingShipment);
        }

        [Fact]
        public void GivenSalesOrder_WhenShipmentIsCreated_ThenOrderItemsAreAddedToPickList()
        {
            var store = this.Session.Extent<Store>().First;
            store.IsImmediatelyPicked = false;

            var mechelen = new CityBuilder(this.Session).WithName("Mechelen").Build();
            var mechelenAddress = new PostalAddressBuilder(this.Session).WithPostalAddressBoundary(mechelen)
                .WithAddress1("Haverwerf 15").Build();
            var shipToMechelen = new PartyContactMechanismBuilder(this.Session)
                .WithContactMechanism(mechelenAddress)
                .WithContactPurpose(new ContactMechanismPurposes(this.Session).ShippingAddress)
                .WithUseAsDefault(true)
                .Build();

            var supplier = new OrganisationBuilder(this.Session).WithName("supplier").Build();

            var customer = new PersonBuilder(this.Session).WithLastName("person1")
                .WithPartyContactMechanism(shipToMechelen).Build();

            new CustomerRelationshipBuilder(this.Session).WithFromDate(this.Session.Now()).WithCustomer(customer)
                .Build();

            new SupplierRelationshipBuilder(this.Session)
                .WithSupplier(supplier)
                .WithFromDate(this.Session.Now())
                .Build();

            var good1 = new NonUnifiedGoods(this.Session).FindBy(M.Good.Name, "good1");
            var good2 = new NonUnifiedGoods(this.Session).FindBy(M.Good.Name, "good2");

            new SupplierOfferingBuilder(this.Session)
                .WithPart(good1.Part)
                .WithSupplier(supplier)
                .WithFromDate(this.Session.Now())
                .WithUnitOfMeasure(new UnitsOfMeasure(this.Session).Piece)
                .WithCurrency(new Currencies(this.Session).FindBy(M.Currency.IsoCode, "EUR"))
                .WithPrice(7)
                .Build();

            new SupplierOfferingBuilder(this.Session)
                .WithPart(good2.Part)
                .WithSupplier(supplier)
                .WithFromDate(this.Session.Now())
                .WithUnitOfMeasure(new UnitsOfMeasure(this.Session).Piece)
                .WithCurrency(new Currencies(this.Session).FindBy(M.Currency.IsoCode, "EUR"))
                .WithPrice(7)
                .Build();

            this.Session.Derive();

            new InventoryItemTransactionBuilder(this.Session).WithQuantity(100)
                .WithReason(new InventoryTransactionReasons(this.Session).PhysicalCount).WithPart(good1.Part).Build();
            new InventoryItemTransactionBuilder(this.Session).WithQuantity(100)
                .WithReason(new InventoryTransactionReasons(this.Session).PhysicalCount).WithPart(good2.Part).Build();

            this.Session.Derive();

            var good1Inventory = good1.Part.InventoryItemsWherePart.First;
            var good2Inventory = good2.Part.InventoryItemsWherePart.First;

            var order = new SalesOrderBuilder(this.Session)
                .WithBillToCustomer(customer)
                .WithShipToCustomer(customer)
                .Build();

            var item1 = new SalesOrderItemBuilder(this.Session).WithProduct(good1).WithQuantityOrdered(1)
                .WithAssignedUnitPrice(15).Build();
            var item2 = new SalesOrderItemBuilder(this.Session).WithProduct(good1).WithQuantityOrdered(2)
                .WithAssignedUnitPrice(15).Build();
            var item3 = new SalesOrderItemBuilder(this.Session).WithProduct(good2).WithQuantityOrdered(5)
                .WithAssignedUnitPrice(15).Build();

            order.AddSalesOrderItem(item1);
            order.AddSalesOrderItem(item2);
            order.AddSalesOrderItem(item3);

            this.Session.Derive();

            order.Confirm();

            this.Session.Derive();

            var pickList = good1.Part.InventoryItemsWherePart[0].PickListItemsWhereInventoryItem[0]
                .PickListWherePickListItem;

            Assert.Equal(2, pickList.PickListItems.Count);

            var extent1 = pickList.PickListItems;
            extent1.Filter.AddEquals(M.PickListItem.InventoryItem, good1Inventory);
            Assert.Equal(3, extent1.First.Quantity);

            var extent2 = pickList.PickListItems;
            extent2.Filter.AddEquals(M.PickListItem.InventoryItem, good2Inventory);
            Assert.Equal(5, extent2.First.Quantity);
        }

        [Fact]
        public void GivenMultipleOrders_WhenCombinedPickListIsPicked_ThenSingleShipmentIsPickedState()
        {
            var store = this.Session.Extent<Store>().First;
            store.IsImmediatelyPicked = false;

            var mechelen = new CityBuilder(this.Session).WithName("Mechelen").Build();
            var mechelenAddress = new PostalAddressBuilder(this.Session).WithPostalAddressBoundary(mechelen)
                .WithAddress1("Haverwerf").Build();
            var shipToMechelen = new PartyContactMechanismBuilder(this.Session)
                .WithContactMechanism(mechelenAddress)
                .WithContactPurpose(new ContactMechanismPurposes(this.Session).ShippingAddress)
                .WithUseAsDefault(true)
                .Build();

            var supplier = new OrganisationBuilder(this.Session).WithName("supplier").Build();
            var customer = new PersonBuilder(this.Session).WithLastName("person1")
                .WithPartyContactMechanism(shipToMechelen).Build();
            new CustomerRelationshipBuilder(this.Session).WithFromDate(this.Session.Now()).WithCustomer(customer)
                .Build();

            new SupplierRelationshipBuilder(this.Session)
                .WithSupplier(supplier)
                .WithFromDate(this.Session.Now())
                .Build();

            var good1 = new NonUnifiedGoods(this.Session).FindBy(M.Good.Name, "good1");
            var good2 = new NonUnifiedGoods(this.Session).FindBy(M.Good.Name, "good2");

            new SupplierOfferingBuilder(this.Session)
                .WithPart(good1.Part)
                .WithFromDate(this.Session.Now())
                .WithUnitOfMeasure(new UnitsOfMeasure(this.Session).Piece)
                .WithCurrency(new Currencies(this.Session).FindBy(M.Currency.IsoCode, "EUR"))
                .WithPrice(7)
                .WithSupplier(supplier)
                .Build();

            new SupplierOfferingBuilder(this.Session)
                .WithPart(good2.Part)
                .WithFromDate(this.Session.Now())
                .WithUnitOfMeasure(new UnitsOfMeasure(this.Session).Piece)
                .WithCurrency(new Currencies(this.Session).FindBy(M.Currency.IsoCode, "EUR"))
                .WithPrice(7)
                .WithSupplier(supplier)
                .Build();

            this.Session.Derive();

            new InventoryItemTransactionBuilder(this.Session).WithQuantity(100)
                .WithReason(new InventoryTransactionReasons(this.Session).PhysicalCount).WithPart(good1.Part).Build();
            new InventoryItemTransactionBuilder(this.Session).WithQuantity(100)
                .WithReason(new InventoryTransactionReasons(this.Session).PhysicalCount).WithPart(good2.Part).Build();

            this.Session.Derive();

            var order1 = new SalesOrderBuilder(this.Session)
                .WithBillToCustomer(customer)
                .WithShipToCustomer(customer)
                .Build();

            var item1 = new SalesOrderItemBuilder(this.Session).WithProduct(good1).WithQuantityOrdered(1)
                .WithAssignedUnitPrice(15).Build();
            var item2 = new SalesOrderItemBuilder(this.Session).WithProduct(good1).WithQuantityOrdered(2)
                .WithAssignedUnitPrice(15).Build();
            var item3 = new SalesOrderItemBuilder(this.Session).WithProduct(good2).WithQuantityOrdered(5)
                .WithAssignedUnitPrice(15).Build();

            order1.AddSalesOrderItem(item1);
            order1.AddSalesOrderItem(item2);
            order1.AddSalesOrderItem(item3);

            this.Session.Derive();

            order1.Confirm();

            this.Session.Derive();

            var order2 = new SalesOrderBuilder(this.Session)
                .WithBillToCustomer(customer)
                .WithShipToCustomer(customer)
                .Build();

            var itema = new SalesOrderItemBuilder(this.Session).WithProduct(good1).WithQuantityOrdered(1)
                .WithAssignedUnitPrice(15).Build();
            var itemb = new SalesOrderItemBuilder(this.Session).WithProduct(good2).WithQuantityOrdered(1)
                .WithAssignedUnitPrice(15).Build();
            order2.AddSalesOrderItem(itema);
            order2.AddSalesOrderItem(itemb);

            this.Session.Derive();

            order2.Confirm();

            this.Session.Derive();

            var pickList = good1.Part.InventoryItemsWherePart[0].PickListItemsWhereInventoryItem[0]
                .PickListWherePickListItem;
            pickList.Picker = new People(this.Session).FindBy(M.Person.LastName, "orderProcessor");

            pickList.SetPicked();

            this.Session.Derive();

            Assert.Single(customer.ShipmentsWhereShipToParty);

            var customerShipment = (CustomerShipment)customer.ShipmentsWhereShipToParty.First;
            Assert.Equal(new ShipmentStates(this.Session).Picked, customerShipment.ShipmentState);
        }
    }

    public class PickListSecurityTests : DomainTest
    {
        public override Config Config => new Config { SetupSecurity = true };

        [Fact]
        public void GivenPickList_WhenObjectStateIsCreated_ThenCheckTransitions()
        {
            var store = this.Session.Extent<Store>().First;
            store.IsImmediatelyPicked = false;

            this.SetIdentity("Administrator");

            var pickList = new PickListBuilder(this.Session).Build();

            this.Session.Derive();

            var acl = new AccessControlListFactory(this.Session.GetUser()).Create(pickList);
            Assert.True(acl.CanExecute(M.PickList.Cancel));
        }

        [Fact]
        public void GivenPickList_WhenObjectStateIsCancelled_ThenCheckTransitions()
        {
            var store = this.Session.Extent<Store>().First;
            store.IsImmediatelyPicked = false;

            this.SetIdentity("orderProcessor");

            var pickList = new PickListBuilder(this.Session).Build();

            this.Session.Derive();

            pickList.Cancel();

            this.Session.Derive();

            var acl = new AccessControlListFactory(this.Session.GetUser()).Create(pickList);
            Assert.False(acl.CanExecute(M.PickList.Cancel));
            Assert.False(acl.CanExecute(M.PickList.SetPicked));
        }

        [Fact]
        public void GivenPickList_WhenObjectStateIsPicked_ThenCheckTransitions()
        {
            var store = this.Session.Extent<Store>().First;
            store.IsImmediatelyPicked = false;

            this.SetIdentity("orderProcessor");

            var pickList = new PickListBuilder(this.Session).Build();

            this.Session.Derive();

            pickList.SetPicked();

            this.Session.Derive();

            var acl = new AccessControlListFactory(this.Session.GetUser()).Create(pickList);
            Assert.False(acl.CanExecute(M.PickList.Cancel));
            Assert.False(acl.CanExecute(M.PickList.SetPicked));
        }
    }
}
