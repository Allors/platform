// Allors generated file. 
// Do not edit this file, changes will be overwritten.
namespace Allors.Domain
{
	public partial class BudgetReview : Allors.IObject , Commentable, AccessControlledObject
	{
		private readonly IStrategy strategy;

		public BudgetReview(Allors.IStrategy strategy) 
		{
			this.strategy = strategy;
		}

		public Allors.Meta.MetaBudgetReview Meta
		{
			get
			{
				return Allors.Meta.MetaBudgetReview.Instance;
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

		public static BudgetReview Instantiate (Allors.ISession allorsSession, string allorsObjectId)
		{
			return (BudgetReview) allorsSession.Instantiate(allorsObjectId);		
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



		virtual public global::System.DateTime ReviewDate 
		{
			get
			{
				return (global::System.DateTime) Strategy.GetUnitRole(Meta.ReviewDate.RelationType);
			}
			set
			{
				Strategy.SetUnitRole(Meta.ReviewDate.RelationType, value);
			}
		}

		virtual public bool ExistReviewDate{
			get
			{
				return Strategy.ExistUnitRole(Meta.ReviewDate.RelationType);
			}
		}

		virtual public void RemoveReviewDate()
		{
			Strategy.RemoveUnitRole(Meta.ReviewDate.RelationType);
		}


		virtual public global::System.String Description 
		{
			get
			{
				return (global::System.String) Strategy.GetUnitRole(Meta.Description.RelationType);
			}
			set
			{
				Strategy.SetUnitRole(Meta.Description.RelationType, value);
			}
		}

		virtual public bool ExistDescription{
			get
			{
				return Strategy.ExistUnitRole(Meta.Description.RelationType);
			}
		}

		virtual public void RemoveDescription()
		{
			Strategy.RemoveUnitRole(Meta.Description.RelationType);
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



		virtual public Budget BudgetWhereBudgetReview
		{ 
			get
			{
				return (Budget) Strategy.GetCompositeAssociation(Meta.BudgetWhereBudgetReview.RelationType);
			}
		} 

		virtual public bool ExistBudgetWhereBudgetReview
		{
			get
			{
				return Strategy.ExistCompositeAssociation(Meta.BudgetWhereBudgetReview.RelationType);
			}
		}


		virtual public BudgetVersion BudgetVersionWhereBudgetReview
		{ 
			get
			{
				return (BudgetVersion) Strategy.GetCompositeAssociation(Meta.BudgetVersionWhereBudgetReview.RelationType);
			}
		} 

		virtual public bool ExistBudgetVersionWhereBudgetReview
		{
			get
			{
				return Strategy.ExistCompositeAssociation(Meta.BudgetVersionWhereBudgetReview.RelationType);
			}
		}



		public ObjectOnBuild OnBuild()
		{ 
			var method = new BudgetReviewOnBuild(this);
            method.Execute();
            return method;
		}

		public ObjectOnBuild OnBuild(System.Action<ObjectOnBuild> action)
		{ 
			var method = new BudgetReviewOnBuild(this);
            action(method);
            method.Execute();
            return method;
		}

		public ObjectOnPostBuild OnPostBuild()
		{ 
			var method = new BudgetReviewOnPostBuild(this);
            method.Execute();
            return method;
		}

		public ObjectOnPostBuild OnPostBuild(System.Action<ObjectOnPostBuild> action)
		{ 
			var method = new BudgetReviewOnPostBuild(this);
            action(method);
            method.Execute();
            return method;
		}

		public ObjectOnPreDerive OnPreDerive()
		{ 
			var method = new BudgetReviewOnPreDerive(this);
            method.Execute();
            return method;
		}

		public ObjectOnPreDerive OnPreDerive(System.Action<ObjectOnPreDerive> action)
		{ 
			var method = new BudgetReviewOnPreDerive(this);
            action(method);
            method.Execute();
            return method;
		}

		public ObjectOnDerive OnDerive()
		{ 
			var method = new BudgetReviewOnDerive(this);
            method.Execute();
            return method;
		}

		public ObjectOnDerive OnDerive(System.Action<ObjectOnDerive> action)
		{ 
			var method = new BudgetReviewOnDerive(this);
            action(method);
            method.Execute();
            return method;
		}

		public ObjectOnPostDerive OnPostDerive()
		{ 
			var method = new BudgetReviewOnPostDerive(this);
            method.Execute();
            return method;
		}

		public ObjectOnPostDerive OnPostDerive(System.Action<ObjectOnPostDerive> action)
		{ 
			var method = new BudgetReviewOnPostDerive(this);
            action(method);
            method.Execute();
            return method;
		}
	}

	public partial class BudgetReviewBuilder : Allors.ObjectBuilder<BudgetReview> , CommentableBuilder, AccessControlledObjectBuilder, global::System.IDisposable
	{		
		public BudgetReviewBuilder(Allors.ISession session) : base(session)
	    {
	    }

		protected override void OnBuild(BudgetReview instance)
		{
			

			if(this.ReviewDate.HasValue)
			{
				instance.ReviewDate = this.ReviewDate.Value;
			}			
		
		

			instance.Description = this.Description;
		
		

			instance.Comment = this.Comment;
		
		
			if(this.DeniedPermissions!=null)
			{
				instance.DeniedPermissions = this.DeniedPermissions.ToArray();
			}
		
			if(this.SecurityTokens!=null)
			{
				instance.SecurityTokens = this.SecurityTokens.ToArray();
			}
		
		}


				public global::System.DateTime? ReviewDate {get; set;}

				/// <exclude/>
				public BudgetReviewBuilder WithReviewDate(global::System.DateTime? value)
		        {
				    if(this.ReviewDate!=null){throw new global::System.ArgumentException("One multicplicity");}
		            this.ReviewDate = value;
		            return this;
		        }	

				public global::System.String Description {get; set;}

				/// <exclude/>
				public BudgetReviewBuilder WithDescription(global::System.String value)
		        {
				    if(this.Description!=null){throw new global::System.ArgumentException("One multicplicity");}
		            this.Description = value;
		            return this;
		        }	

				public global::System.String Comment {get; set;}

				/// <exclude/>
				public BudgetReviewBuilder WithComment(global::System.String value)
		        {
				    if(this.Comment!=null){throw new global::System.ArgumentException("One multicplicity");}
		            this.Comment = value;
		            return this;
		        }	

				public global::System.Collections.Generic.List<Permission> DeniedPermissions {get; set;}	

				/// <exclude/>
				public BudgetReviewBuilder WithDeniedPermission(Permission value)
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
				public BudgetReviewBuilder WithSecurityToken(SecurityToken value)
		        {
					if(this.SecurityTokens == null)
					{
						this.SecurityTokens = new global::System.Collections.Generic.List<SecurityToken>(); 
					}
		            this.SecurityTokens.Add(value);
		            return this;
		        }		

				

	}

	public partial class BudgetReviews : global::Allors.ObjectsBase<BudgetReview>
	{
		public BudgetReviews(Allors.ISession session) : base(session)
		{
		}

		public Allors.Meta.MetaBudgetReview Meta
		{
			get
			{
				return Allors.Meta.MetaBudgetReview.Instance;
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