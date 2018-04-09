// --------------------------------------------------------------------------------------------------------------------
// <copyright file="ShipmentReceipt.cs" company="Allors bvba">
//   Copyright 2002-2012 Allors bvba.
// Dual Licensed under
//   a) the General Public Licence v3 (GPL)
//   b) the Allors License
// The GPL License is included in the file gpl.txt.
// The Allors License is an addendum to your contract.
// Allors Applications is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// For more information visit http://www.allors.com/legal
// </copyright>
// --------------------------------------------------------------------------------------------------------------------
namespace Allors.Domain
{
    using System;
    using Meta;

    public partial class ShipmentReceipt
    {
        public void AppsOnBuild(ObjectOnBuild method)
        {
            if (!this.ExistReceivedDateTime)
            {
                this.ReceivedDateTime = DateTime.UtcNow;
            }
        }

        public void AppsOnDerive(ObjectOnDerive method)
        {
            var derivation = method.Derivation;

            this.ReceivedDateTime = this.ReceivedDateTime.Date;

            if (this.ExistOrderItem && this.ExistShipmentItem)
            {
                var orderShipmentsWhereShipmentItem = this.ShipmentItem.OrderShipmentsWhereShipmentItem;
                orderShipmentsWhereShipmentItem.Filter.AddEquals(M.OrderShipment.SalesOrderItem, this.OrderItem);

                if (orderShipmentsWhereShipmentItem.First == null)
                {
                    new OrderShipmentBuilder(this.Strategy.Session)
                        .WithPurchaseOrderItem((PurchaseOrderItem)this.OrderItem)
                        .WithShipmentItem(this.ShipmentItem)
                        .WithQuantity(this.QuantityAccepted)
                        .Build();
                }
                else
                {
                    orderShipmentsWhereShipmentItem.First.Quantity += this.QuantityAccepted;
                }
            }

            this.AppsOnDeriveInventoryItem(derivation);
        }

        public void AppsOnDeriveInventoryItem(IDerivation derivation)
        {
            if (this.ExistShipmentItem && this.ShipmentItem.ExistOrderShipmentsWhereShipmentItem)
            {
                var purchaseShipment = (PurchaseShipment)this.ShipmentItem.ShipmentWhereShipmentItem;
                var internalOrganisation = purchaseShipment.Receiver;
                var purchaseOrderItem = this.ShipmentItem.OrderShipmentsWhereShipmentItem[0].PurchaseOrderItem;
                var defaultFacility = internalOrganisation?.DefaultFacility;

                if (purchaseOrderItem.ExistProduct)
                {
                    var good = purchaseOrderItem.Product as Good;
                    if (good != null)
                    {
                        if (good.ExistFinishedGood)
                        {
                            if (!this.ExistInventoryItem || !this.InventoryItem.Part.Equals(good.FinishedGood))
                            {
                                var inventoryItems = good.FinishedGood.InventoryItemsWherePart;
                                inventoryItems.Filter.AddEquals(M.InventoryItem.Facility, defaultFacility);
                                this.InventoryItem = inventoryItems.First as NonSerialisedInventoryItem;
                            }
                        }
                        else
                        {
                            if (!this.ExistInventoryItem || !this.InventoryItem.Good.Equals(good))
                            {
                                var inventoryItems = good.InventoryItemsWhereGood;
                                inventoryItems.Filter.AddEquals(M.InventoryItem.Facility, defaultFacility);
                                this.InventoryItem = inventoryItems.First as NonSerialisedInventoryItem ??
                                                     new NonSerialisedInventoryItemBuilder(this.Strategy.Session).WithGood(good).Build();
                            }
                        }
                    }
                }

                if (purchaseOrderItem.ExistPart)
                {
                    if (!this.ExistInventoryItem || !this.InventoryItem.Part.Equals(purchaseOrderItem.Part))
                    {
                        var inventoryItems = purchaseOrderItem.Part.InventoryItemsWherePart;
                        inventoryItems.Filter.AddEquals(M.InventoryItem.Facility, defaultFacility);
                        this.InventoryItem = inventoryItems.First as NonSerialisedInventoryItem;
                    }
                }
            }
        }
    }
}