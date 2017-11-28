// Allors generated file. 
// Do not edit this file, changes will be overwritten.
namespace Allors.Domain
{
	public partial class OrderShipment : Allors.IObject , Deletable
	{
		private readonly IStrategy strategy;

		public OrderShipment(Allors.IStrategy strategy) 
		{
			this.strategy = strategy;
		}

		public Allors.Meta.MetaOrderShipment Meta
		{
			get
			{
				return Allors.Meta.MetaOrderShipment.Instance;
			}
		}

		public long Id
		{
			get { return this.strategy.ObjectId; }
		}

		public IStrategy Strategy
        {
            [System.Diagnostics.DebuggerStepThrough]
            get { return this.strategy; }
        }

		public static OrderShipment Instantiate (Allors.ISession allorsSession, string allorsObjectId)
		{
			return (OrderShipment) allorsSession.Instantiate(allorsObjectId);		
		}

		public override bool Equals(object obj)
        {
            var typedObj = obj as IObject;
            return typedObj != null &&
                   typedObj.Strategy.ObjectId.Equals(this.Strategy.ObjectId) &&
                   typedObj.Strategy.Session.Database.Id.Equals(this.Strategy.Session.Database.Id);
        }

		public override int GetHashCode()
        {
            return this.Strategy.ObjectId.GetHashCode();
        }



		virtual public SalesOrderItem SalesOrderItem
		{ 
			get
			{
				return (SalesOrderItem) Strategy.GetCompositeRole(Meta.SalesOrderItem.RelationType);
			}
			set
			{
				Strategy.SetCompositeRole(Meta.SalesOrderItem.RelationType, value);
			}
		}

		virtual public bool ExistSalesOrderItem
		{
			get
			{
				return Strategy.ExistCompositeRole(Meta.SalesOrderItem.RelationType);
			}
		}

		virtual public void RemoveSalesOrderItem()
		{
			Strategy.RemoveCompositeRole(Meta.SalesOrderItem.RelationType);
		}


		virtual public global::System.Boolean Picked 
		{
			get
			{
				return (global::System.Boolean) Strategy.GetUnitRole(Meta.Picked.RelationType);
			}
			set
			{
				Strategy.SetUnitRole(Meta.Picked.RelationType, value);
			}
		}

		virtual public bool ExistPicked{
			get
			{
				return Strategy.ExistUnitRole(Meta.Picked.RelationType);
			}
		}

		virtual public void RemovePicked()
		{
			Strategy.RemoveUnitRole(Meta.Picked.RelationType);
		}


		virtual public ShipmentItem ShipmentItem
		{ 
			get
			{
				return (ShipmentItem) Strategy.GetCompositeRole(Meta.ShipmentItem.RelationType);
			}
			set
			{
				Strategy.SetCompositeRole(Meta.ShipmentItem.RelationType, value);
			}
		}

		virtual public bool ExistShipmentItem
		{
			get
			{
				return Strategy.ExistCompositeRole(Meta.ShipmentItem.RelationType);
			}
		}

		virtual public void RemoveShipmentItem()
		{
			Strategy.RemoveCompositeRole(Meta.ShipmentItem.RelationType);
		}


		virtual public global::System.Decimal Quantity 
		{
			get
			{
				return (global::System.Decimal) Strategy.GetUnitRole(Meta.Quantity.RelationType);
			}
			set
			{
				Strategy.SetUnitRole(Meta.Quantity.RelationType, value);
			}
		}

		virtual public bool ExistQuantity{
			get
			{
				return Strategy.ExistUnitRole(Meta.Quantity.RelationType);
			}
		}

		virtual public void RemoveQuantity()
		{
			Strategy.RemoveUnitRole(Meta.Quantity.RelationType);
		}


		virtual public PurchaseOrderItem PurchaseOrderItem
		{ 
			get
			{
				return (PurchaseOrderItem) Strategy.GetCompositeRole(Meta.PurchaseOrderItem.RelationType);
			}
			set
			{
				Strategy.SetCompositeRole(Meta.PurchaseOrderItem.RelationType, value);
			}
		}

		virtual public bool ExistPurchaseOrderItem
		{
			get
			{
				return Strategy.ExistCompositeRole(Meta.PurchaseOrderItem.RelationType);
			}
		}

		virtual public void RemovePurchaseOrderItem()
		{
			Strategy.RemoveCompositeRole(Meta.PurchaseOrderItem.RelationType);
		}



		public DeletableDelete Delete()
		{ 
			var method = new OrderShipmentDelete(this);
            method.Execute();
            return method;
		}

		public DeletableDelete Delete(System.Action<DeletableDelete> action)
		{ 
			var method = new OrderShipmentDelete(this);
            action(method);
            method.Execute();
            return method;
		}

		public ObjectOnBuild OnBuild()
		{ 
			var method = new OrderShipmentOnBuild(this);
            method.Execute();
            return method;
		}

		public ObjectOnBuild OnBuild(System.Action<ObjectOnBuild> action)
		{ 
			var method = new OrderShipmentOnBuild(this);
            action(method);
            method.Execute();
            return method;
		}

		public ObjectOnPostBuild OnPostBuild()
		{ 
			var method = new OrderShipmentOnPostBuild(this);
            method.Execute();
            return method;
		}

		public ObjectOnPostBuild OnPostBuild(System.Action<ObjectOnPostBuild> action)
		{ 
			var method = new OrderShipmentOnPostBuild(this);
            action(method);
            method.Execute();
            return method;
		}

		public ObjectOnPreDerive OnPreDerive()
		{ 
			var method = new OrderShipmentOnPreDerive(this);
            method.Execute();
            return method;
		}

		public ObjectOnPreDerive OnPreDerive(System.Action<ObjectOnPreDerive> action)
		{ 
			var method = new OrderShipmentOnPreDerive(this);
            action(method);
            method.Execute();
            return method;
		}

		public ObjectOnDerive OnDerive()
		{ 
			var method = new OrderShipmentOnDerive(this);
            method.Execute();
            return method;
		}

		public ObjectOnDerive OnDerive(System.Action<ObjectOnDerive> action)
		{ 
			var method = new OrderShipmentOnDerive(this);
            action(method);
            method.Execute();
            return method;
		}

		public ObjectOnPostDerive OnPostDerive()
		{ 
			var method = new OrderShipmentOnPostDerive(this);
            method.Execute();
            return method;
		}

		public ObjectOnPostDerive OnPostDerive(System.Action<ObjectOnPostDerive> action)
		{ 
			var method = new OrderShipmentOnPostDerive(this);
            action(method);
            method.Execute();
            return method;
		}
	}

	public partial class OrderShipmentBuilder : Allors.ObjectBuilder<OrderShipment> , DeletableBuilder, global::System.IDisposable
	{		
		public OrderShipmentBuilder(Allors.ISession session) : base(session)
	    {
	    }

		protected override void OnBuild(OrderShipment instance)
		{
			

			if(this.Picked.HasValue)
			{
				instance.Picked = this.Picked.Value;
			}			
		
		
			

			if(this.Quantity.HasValue)
			{
				instance.Quantity = this.Quantity.Value;
			}			
		
		

			instance.SalesOrderItem = this.SalesOrderItem;

		

			instance.ShipmentItem = this.ShipmentItem;

		

			instance.PurchaseOrderItem = this.PurchaseOrderItem;

		
		}


				public SalesOrderItem SalesOrderItem {get; set;}

				/// <exclude/>
				public OrderShipmentBuilder WithSalesOrderItem(SalesOrderItem value)
		        {
		            if(this.SalesOrderItem!=null){throw new global::System.ArgumentException("One multicplicity");}
					this.SalesOrderItem = value;
		            return this;
		        }		

				
				public global::System.Boolean? Picked {get; set;}

				/// <exclude/>
				public OrderShipmentBuilder WithPicked(global::System.Boolean? value)
		        {
				    if(this.Picked!=null){throw new global::System.ArgumentException("One multicplicity");}
		            this.Picked = value;
		            return this;
		        }	

				public ShipmentItem ShipmentItem {get; set;}

				/// <exclude/>
				public OrderShipmentBuilder WithShipmentItem(ShipmentItem value)
		        {
		            if(this.ShipmentItem!=null){throw new global::System.ArgumentException("One multicplicity");}
					this.ShipmentItem = value;
		            return this;
		        }		

				
				public global::System.Decimal? Quantity {get; set;}

				/// <exclude/>
				public OrderShipmentBuilder WithQuantity(global::System.Decimal? value)
		        {
				    if(this.Quantity!=null){throw new global::System.ArgumentException("One multicplicity");}
		            this.Quantity = value;
		            return this;
		        }	

				public PurchaseOrderItem PurchaseOrderItem {get; set;}

				/// <exclude/>
				public OrderShipmentBuilder WithPurchaseOrderItem(PurchaseOrderItem value)
		        {
		            if(this.PurchaseOrderItem!=null){throw new global::System.ArgumentException("One multicplicity");}
					this.PurchaseOrderItem = value;
		            return this;
		        }		

				

	}

	public partial class OrderShipments : global::Allors.ObjectsBase<OrderShipment>
	{
		public OrderShipments(Allors.ISession session) : base(session)
		{
		}

		public Allors.Meta.MetaOrderShipment Meta
		{
			get
			{
				return Allors.Meta.MetaOrderShipment.Instance;
			}
		}

		public override Allors.Meta.Composite ObjectType
		{
			get
			{
				return Meta.ObjectType;
			}
		}
	}

}