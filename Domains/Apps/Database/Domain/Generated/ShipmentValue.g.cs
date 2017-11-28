// Allors generated file. 
// Do not edit this file, changes will be overwritten.
namespace Allors.Domain
{
	public partial class ShipmentValue : Allors.IObject , AccessControlledObject
	{
		private readonly IStrategy strategy;

		public ShipmentValue(Allors.IStrategy strategy) 
		{
			this.strategy = strategy;
		}

		public Allors.Meta.MetaShipmentValue Meta
		{
			get
			{
				return Allors.Meta.MetaShipmentValue.Instance;
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

		public static ShipmentValue Instantiate (Allors.ISession allorsSession, string allorsObjectId)
		{
			return (ShipmentValue) allorsSession.Instantiate(allorsObjectId);		
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



		virtual public global::System.Decimal? ThroughAmount 
		{
			get
			{
				return (global::System.Decimal?) Strategy.GetUnitRole(Meta.ThroughAmount.RelationType);
			}
			set
			{
				Strategy.SetUnitRole(Meta.ThroughAmount.RelationType, value);
			}
		}

		virtual public bool ExistThroughAmount{
			get
			{
				return Strategy.ExistUnitRole(Meta.ThroughAmount.RelationType);
			}
		}

		virtual public void RemoveThroughAmount()
		{
			Strategy.RemoveUnitRole(Meta.ThroughAmount.RelationType);
		}


		virtual public global::System.Decimal? FromAmount 
		{
			get
			{
				return (global::System.Decimal?) Strategy.GetUnitRole(Meta.FromAmount.RelationType);
			}
			set
			{
				Strategy.SetUnitRole(Meta.FromAmount.RelationType, value);
			}
		}

		virtual public bool ExistFromAmount{
			get
			{
				return Strategy.ExistUnitRole(Meta.FromAmount.RelationType);
			}
		}

		virtual public void RemoveFromAmount()
		{
			Strategy.RemoveUnitRole(Meta.FromAmount.RelationType);
		}


		virtual public global::Allors.Extent<Permission> DeniedPermissions
		{ 
			get
			{
				return Strategy.GetCompositeRoles(Meta.DeniedPermissions.RelationType);
			}
			set
			{
				Strategy.SetCompositeRoles(Meta.DeniedPermissions.RelationType, value);
			}
		}

		virtual public void AddDeniedPermission (Permission value)
		{
			Strategy.AddCompositeRole(Meta.DeniedPermissions.RelationType, value);
		}

		virtual public void RemoveDeniedPermission (Permission value)
		{
			Strategy.RemoveCompositeRole(Meta.DeniedPermissions.RelationType, value);
		}

		virtual public bool ExistDeniedPermissions
		{
			get
			{
				return Strategy.ExistCompositeRoles(Meta.DeniedPermissions.RelationType);
			}
		}

		virtual public void RemoveDeniedPermissions()
		{
			Strategy.RemoveCompositeRoles(Meta.DeniedPermissions.RelationType);
		}


		virtual public global::Allors.Extent<SecurityToken> SecurityTokens
		{ 
			get
			{
				return Strategy.GetCompositeRoles(Meta.SecurityTokens.RelationType);
			}
			set
			{
				Strategy.SetCompositeRoles(Meta.SecurityTokens.RelationType, value);
			}
		}

		virtual public void AddSecurityToken (SecurityToken value)
		{
			Strategy.AddCompositeRole(Meta.SecurityTokens.RelationType, value);
		}

		virtual public void RemoveSecurityToken (SecurityToken value)
		{
			Strategy.RemoveCompositeRole(Meta.SecurityTokens.RelationType, value);
		}

		virtual public bool ExistSecurityTokens
		{
			get
			{
				return Strategy.ExistCompositeRoles(Meta.SecurityTokens.RelationType);
			}
		}

		virtual public void RemoveSecurityTokens()
		{
			Strategy.RemoveCompositeRoles(Meta.SecurityTokens.RelationType);
		}



		virtual public global::Allors.Extent<ShippingAndHandlingComponent> ShippingAndHandlingComponentsWhereShipmentValue
		{ 
			get
			{
				return Strategy.GetCompositeAssociations(Meta.ShippingAndHandlingComponentsWhereShipmentValue.RelationType);
			}
		}

		virtual public bool ExistShippingAndHandlingComponentsWhereShipmentValue
		{
			get
			{
				return Strategy.ExistCompositeAssociations(Meta.ShippingAndHandlingComponentsWhereShipmentValue.RelationType);
			}
		}



		public ObjectOnBuild OnBuild()
		{ 
			var method = new ShipmentValueOnBuild(this);
            method.Execute();
            return method;
		}

		public ObjectOnBuild OnBuild(System.Action<ObjectOnBuild> action)
		{ 
			var method = new ShipmentValueOnBuild(this);
            action(method);
            method.Execute();
            return method;
		}

		public ObjectOnPostBuild OnPostBuild()
		{ 
			var method = new ShipmentValueOnPostBuild(this);
            method.Execute();
            return method;
		}

		public ObjectOnPostBuild OnPostBuild(System.Action<ObjectOnPostBuild> action)
		{ 
			var method = new ShipmentValueOnPostBuild(this);
            action(method);
            method.Execute();
            return method;
		}

		public ObjectOnPreDerive OnPreDerive()
		{ 
			var method = new ShipmentValueOnPreDerive(this);
            method.Execute();
            return method;
		}

		public ObjectOnPreDerive OnPreDerive(System.Action<ObjectOnPreDerive> action)
		{ 
			var method = new ShipmentValueOnPreDerive(this);
            action(method);
            method.Execute();
            return method;
		}

		public ObjectOnDerive OnDerive()
		{ 
			var method = new ShipmentValueOnDerive(this);
            method.Execute();
            return method;
		}

		public ObjectOnDerive OnDerive(System.Action<ObjectOnDerive> action)
		{ 
			var method = new ShipmentValueOnDerive(this);
            action(method);
            method.Execute();
            return method;
		}

		public ObjectOnPostDerive OnPostDerive()
		{ 
			var method = new ShipmentValueOnPostDerive(this);
            method.Execute();
            return method;
		}

		public ObjectOnPostDerive OnPostDerive(System.Action<ObjectOnPostDerive> action)
		{ 
			var method = new ShipmentValueOnPostDerive(this);
            action(method);
            method.Execute();
            return method;
		}
	}

	public partial class ShipmentValueBuilder : Allors.ObjectBuilder<ShipmentValue> , AccessControlledObjectBuilder, global::System.IDisposable
	{		
		public ShipmentValueBuilder(Allors.ISession session) : base(session)
	    {
	    }

		protected override void OnBuild(ShipmentValue instance)
		{
			

			if(this.ThroughAmount.HasValue)
			{
				instance.ThroughAmount = this.ThroughAmount.Value;
			}			
		
		
			

			if(this.FromAmount.HasValue)
			{
				instance.FromAmount = this.FromAmount.Value;
			}			
		
		
			if(this.DeniedPermissions!=null)
			{
				instance.DeniedPermissions = this.DeniedPermissions.ToArray();
			}
		
			if(this.SecurityTokens!=null)
			{
				instance.SecurityTokens = this.SecurityTokens.ToArray();
			}
		
		}


				public global::System.Decimal? ThroughAmount {get; set;}

				/// <exclude/>
				public ShipmentValueBuilder WithThroughAmount(global::System.Decimal? value)
		        {
				    if(this.ThroughAmount!=null){throw new global::System.ArgumentException("One multicplicity");}
		            this.ThroughAmount = value;
		            return this;
		        }	

				public global::System.Decimal? FromAmount {get; set;}

				/// <exclude/>
				public ShipmentValueBuilder WithFromAmount(global::System.Decimal? value)
		        {
				    if(this.FromAmount!=null){throw new global::System.ArgumentException("One multicplicity");}
		            this.FromAmount = value;
		            return this;
		        }	

				public global::System.Collections.Generic.List<Permission> DeniedPermissions {get; set;}	

				/// <exclude/>
				public ShipmentValueBuilder WithDeniedPermission(Permission value)
		        {
					if(this.DeniedPermissions == null)
					{
						this.DeniedPermissions = new global::System.Collections.Generic.List<Permission>(); 
					}
		            this.DeniedPermissions.Add(value);
		            return this;
		        }		

				
				public global::System.Collections.Generic.List<SecurityToken> SecurityTokens {get; set;}	

				/// <exclude/>
				public ShipmentValueBuilder WithSecurityToken(SecurityToken value)
		        {
					if(this.SecurityTokens == null)
					{
						this.SecurityTokens = new global::System.Collections.Generic.List<SecurityToken>(); 
					}
		            this.SecurityTokens.Add(value);
		            return this;
		        }		

				

	}

	public partial class ShipmentValues : global::Allors.ObjectsBase<ShipmentValue>
	{
		public ShipmentValues(Allors.ISession session) : base(session)
		{
		}

		public Allors.Meta.MetaShipmentValue Meta
		{
			get
			{
				return Allors.Meta.MetaShipmentValue.Instance;
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