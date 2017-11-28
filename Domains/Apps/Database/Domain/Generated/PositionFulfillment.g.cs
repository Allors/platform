// Allors generated file. 
// Do not edit this file, changes will be overwritten.
namespace Allors.Domain
{
	public partial class PositionFulfillment : Allors.IObject , Commentable, Period, AccessControlledObject
	{
		private readonly IStrategy strategy;

		public PositionFulfillment(Allors.IStrategy strategy) 
		{
			this.strategy = strategy;
		}

		public Allors.Meta.MetaPositionFulfillment Meta
		{
			get
			{
				return Allors.Meta.MetaPositionFulfillment.Instance;
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

		public static PositionFulfillment Instantiate (Allors.ISession allorsSession, string allorsObjectId)
		{
			return (PositionFulfillment) allorsSession.Instantiate(allorsObjectId);		
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



		virtual public Position Position
		{ 
			get
			{
				return (Position) Strategy.GetCompositeRole(Meta.Position.RelationType);
			}
			set
			{
				Strategy.SetCompositeRole(Meta.Position.RelationType, value);
			}
		}

		virtual public bool ExistPosition
		{
			get
			{
				return Strategy.ExistCompositeRole(Meta.Position.RelationType);
			}
		}

		virtual public void RemovePosition()
		{
			Strategy.RemoveCompositeRole(Meta.Position.RelationType);
		}


		virtual public Person Person
		{ 
			get
			{
				return (Person) Strategy.GetCompositeRole(Meta.Person.RelationType);
			}
			set
			{
				Strategy.SetCompositeRole(Meta.Person.RelationType, value);
			}
		}

		virtual public bool ExistPerson
		{
			get
			{
				return Strategy.ExistCompositeRole(Meta.Person.RelationType);
			}
		}

		virtual public void RemovePerson()
		{
			Strategy.RemoveCompositeRole(Meta.Person.RelationType);
		}


		virtual public global::System.String Comment 
		{
			get
			{
				return (global::System.String) Strategy.GetUnitRole(Meta.Comment.RelationType);
			}
			set
			{
				Strategy.SetUnitRole(Meta.Comment.RelationType, value);
			}
		}

		virtual public bool ExistComment{
			get
			{
				return Strategy.ExistUnitRole(Meta.Comment.RelationType);
			}
		}

		virtual public void RemoveComment()
		{
			Strategy.RemoveUnitRole(Meta.Comment.RelationType);
		}


		virtual public global::System.DateTime FromDate 
		{
			get
			{
				return (global::System.DateTime) Strategy.GetUnitRole(Meta.FromDate.RelationType);
			}
			set
			{
				Strategy.SetUnitRole(Meta.FromDate.RelationType, value);
			}
		}

		virtual public bool ExistFromDate{
			get
			{
				return Strategy.ExistUnitRole(Meta.FromDate.RelationType);
			}
		}

		virtual public void RemoveFromDate()
		{
			Strategy.RemoveUnitRole(Meta.FromDate.RelationType);
		}


		virtual public global::System.DateTime? ThroughDate 
		{
			get
			{
				return (global::System.DateTime?) Strategy.GetUnitRole(Meta.ThroughDate.RelationType);
			}
			set
			{
				Strategy.SetUnitRole(Meta.ThroughDate.RelationType, value);
			}
		}

		virtual public bool ExistThroughDate{
			get
			{
				return Strategy.ExistUnitRole(Meta.ThroughDate.RelationType);
			}
		}

		virtual public void RemoveThroughDate()
		{
			Strategy.RemoveUnitRole(Meta.ThroughDate.RelationType);
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



		public ObjectOnBuild OnBuild()
		{ 
			var method = new PositionFulfillmentOnBuild(this);
            method.Execute();
            return method;
		}

		public ObjectOnBuild OnBuild(System.Action<ObjectOnBuild> action)
		{ 
			var method = new PositionFulfillmentOnBuild(this);
            action(method);
            method.Execute();
            return method;
		}

		public ObjectOnPostBuild OnPostBuild()
		{ 
			var method = new PositionFulfillmentOnPostBuild(this);
            method.Execute();
            return method;
		}

		public ObjectOnPostBuild OnPostBuild(System.Action<ObjectOnPostBuild> action)
		{ 
			var method = new PositionFulfillmentOnPostBuild(this);
            action(method);
            method.Execute();
            return method;
		}

		public ObjectOnPreDerive OnPreDerive()
		{ 
			var method = new PositionFulfillmentOnPreDerive(this);
            method.Execute();
            return method;
		}

		public ObjectOnPreDerive OnPreDerive(System.Action<ObjectOnPreDerive> action)
		{ 
			var method = new PositionFulfillmentOnPreDerive(this);
            action(method);
            method.Execute();
            return method;
		}

		public ObjectOnDerive OnDerive()
		{ 
			var method = new PositionFulfillmentOnDerive(this);
            method.Execute();
            return method;
		}

		public ObjectOnDerive OnDerive(System.Action<ObjectOnDerive> action)
		{ 
			var method = new PositionFulfillmentOnDerive(this);
            action(method);
            method.Execute();
            return method;
		}

		public ObjectOnPostDerive OnPostDerive()
		{ 
			var method = new PositionFulfillmentOnPostDerive(this);
            method.Execute();
            return method;
		}

		public ObjectOnPostDerive OnPostDerive(System.Action<ObjectOnPostDerive> action)
		{ 
			var method = new PositionFulfillmentOnPostDerive(this);
            action(method);
            method.Execute();
            return method;
		}
	}

	public partial class PositionFulfillmentBuilder : Allors.ObjectBuilder<PositionFulfillment> , CommentableBuilder, PeriodBuilder, AccessControlledObjectBuilder, global::System.IDisposable
	{		
		public PositionFulfillmentBuilder(Allors.ISession session) : base(session)
	    {
	    }

		protected override void OnBuild(PositionFulfillment instance)
		{

			instance.Comment = this.Comment;
		
		
			

			if(this.FromDate.HasValue)
			{
				instance.FromDate = this.FromDate.Value;
			}			
		
		
			

			if(this.ThroughDate.HasValue)
			{
				instance.ThroughDate = this.ThroughDate.Value;
			}			
		
		

			instance.Position = this.Position;

		

			instance.Person = this.Person;

		
			if(this.DeniedPermissions!=null)
			{
				instance.DeniedPermissions = this.DeniedPermissions.ToArray();
			}
		
			if(this.SecurityTokens!=null)
			{
				instance.SecurityTokens = this.SecurityTokens.ToArray();
			}
		
		}


				public Position Position {get; set;}

				/// <exclude/>
				public PositionFulfillmentBuilder WithPosition(Position value)
		        {
		            if(this.Position!=null){throw new global::System.ArgumentException("One multicplicity");}
					this.Position = value;
		            return this;
		        }		

				
				public Person Person {get; set;}

				/// <exclude/>
				public PositionFulfillmentBuilder WithPerson(Person value)
		        {
		            if(this.Person!=null){throw new global::System.ArgumentException("One multicplicity");}
					this.Person = value;
		            return this;
		        }		

				
				public global::System.String Comment {get; set;}

				/// <exclude/>
				public PositionFulfillmentBuilder WithComment(global::System.String value)
		        {
				    if(this.Comment!=null){throw new global::System.ArgumentException("One multicplicity");}
		            this.Comment = value;
		            return this;
		        }	

				public global::System.DateTime? FromDate {get; set;}

				/// <exclude/>
				public PositionFulfillmentBuilder WithFromDate(global::System.DateTime? value)
		        {
				    if(this.FromDate!=null){throw new global::System.ArgumentException("One multicplicity");}
		            this.FromDate = value;
		            return this;
		        }	

				public global::System.DateTime? ThroughDate {get; set;}

				/// <exclude/>
				public PositionFulfillmentBuilder WithThroughDate(global::System.DateTime? value)
		        {
				    if(this.ThroughDate!=null){throw new global::System.ArgumentException("One multicplicity");}
		            this.ThroughDate = value;
		            return this;
		        }	

				public global::System.Collections.Generic.List<Permission> DeniedPermissions {get; set;}	

				/// <exclude/>
				public PositionFulfillmentBuilder WithDeniedPermission(Permission value)
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
				public PositionFulfillmentBuilder WithSecurityToken(SecurityToken value)
		        {
					if(this.SecurityTokens == null)
					{
						this.SecurityTokens = new global::System.Collections.Generic.List<SecurityToken>(); 
					}
		            this.SecurityTokens.Add(value);
		            return this;
		        }		

				

	}

	public partial class PositionFulfillments : global::Allors.ObjectsBase<PositionFulfillment>
	{
		public PositionFulfillments(Allors.ISession session) : base(session)
		{
		}

		public Allors.Meta.MetaPositionFulfillment Meta
		{
			get
			{
				return Allors.Meta.MetaPositionFulfillment.Instance;
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