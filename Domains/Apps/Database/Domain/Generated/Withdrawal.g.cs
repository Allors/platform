// Allors generated file. 
// Do not edit this file, changes will be overwritten.
namespace Allors.Domain
{
	public partial class Withdrawal : Allors.IObject , FinancialAccountTransaction
	{
		private readonly IStrategy strategy;

		public Withdrawal(Allors.IStrategy strategy) 
		{
			this.strategy = strategy;
		}

		public Allors.Meta.MetaWithdrawal Meta
		{
			get
			{
				return Allors.Meta.MetaWithdrawal.Instance;
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

		public static Withdrawal Instantiate (Allors.ISession allorsSession, string allorsObjectId)
		{
			return (Withdrawal) allorsSession.Instantiate(allorsObjectId);		
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



		virtual public Disbursement Disbursement
		{ 
			get
			{
				return (Disbursement) Strategy.GetCompositeRole(Meta.Disbursement.RelationType);
			}
			set
			{
				Strategy.SetCompositeRole(Meta.Disbursement.RelationType, value);
			}
		}

		virtual public bool ExistDisbursement
		{
			get
			{
				return Strategy.ExistCompositeRole(Meta.Disbursement.RelationType);
			}
		}

		virtual public void RemoveDisbursement()
		{
			Strategy.RemoveCompositeRole(Meta.Disbursement.RelationType);
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


		virtual public global::System.DateTime? EntryDate 
		{
			get
			{
				return (global::System.DateTime?) Strategy.GetUnitRole(Meta.EntryDate.RelationType);
			}
			set
			{
				Strategy.SetUnitRole(Meta.EntryDate.RelationType, value);
			}
		}

		virtual public bool ExistEntryDate{
			get
			{
				return Strategy.ExistUnitRole(Meta.EntryDate.RelationType);
			}
		}

		virtual public void RemoveEntryDate()
		{
			Strategy.RemoveUnitRole(Meta.EntryDate.RelationType);
		}


		virtual public global::System.DateTime TransactionDate 
		{
			get
			{
				return (global::System.DateTime) Strategy.GetUnitRole(Meta.TransactionDate.RelationType);
			}
			set
			{
				Strategy.SetUnitRole(Meta.TransactionDate.RelationType, value);
			}
		}

		virtual public bool ExistTransactionDate{
			get
			{
				return Strategy.ExistUnitRole(Meta.TransactionDate.RelationType);
			}
		}

		virtual public void RemoveTransactionDate()
		{
			Strategy.RemoveUnitRole(Meta.TransactionDate.RelationType);
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



		virtual public FinancialAccount FinancialAccountWhereFinancialAccountTransaction
		{ 
			get
			{
				return (FinancialAccount) Strategy.GetCompositeAssociation(Meta.FinancialAccountWhereFinancialAccountTransaction.RelationType);
			}
		} 

		virtual public bool ExistFinancialAccountWhereFinancialAccountTransaction
		{
			get
			{
				return Strategy.ExistCompositeAssociation(Meta.FinancialAccountWhereFinancialAccountTransaction.RelationType);
			}
		}



		public ObjectOnBuild OnBuild()
		{ 
			var method = new WithdrawalOnBuild(this);
            method.Execute();
            return method;
		}

		public ObjectOnBuild OnBuild(System.Action<ObjectOnBuild> action)
		{ 
			var method = new WithdrawalOnBuild(this);
            action(method);
            method.Execute();
            return method;
		}

		public ObjectOnPostBuild OnPostBuild()
		{ 
			var method = new WithdrawalOnPostBuild(this);
            method.Execute();
            return method;
		}

		public ObjectOnPostBuild OnPostBuild(System.Action<ObjectOnPostBuild> action)
		{ 
			var method = new WithdrawalOnPostBuild(this);
            action(method);
            method.Execute();
            return method;
		}

		public ObjectOnPreDerive OnPreDerive()
		{ 
			var method = new WithdrawalOnPreDerive(this);
            method.Execute();
            return method;
		}

		public ObjectOnPreDerive OnPreDerive(System.Action<ObjectOnPreDerive> action)
		{ 
			var method = new WithdrawalOnPreDerive(this);
            action(method);
            method.Execute();
            return method;
		}

		public ObjectOnDerive OnDerive()
		{ 
			var method = new WithdrawalOnDerive(this);
            method.Execute();
            return method;
		}

		public ObjectOnDerive OnDerive(System.Action<ObjectOnDerive> action)
		{ 
			var method = new WithdrawalOnDerive(this);
            action(method);
            method.Execute();
            return method;
		}

		public ObjectOnPostDerive OnPostDerive()
		{ 
			var method = new WithdrawalOnPostDerive(this);
            method.Execute();
            return method;
		}

		public ObjectOnPostDerive OnPostDerive(System.Action<ObjectOnPostDerive> action)
		{ 
			var method = new WithdrawalOnPostDerive(this);
            action(method);
            method.Execute();
            return method;
		}
	}

	public partial class WithdrawalBuilder : Allors.ObjectBuilder<Withdrawal> , FinancialAccountTransactionBuilder, global::System.IDisposable
	{		
		public WithdrawalBuilder(Allors.ISession session) : base(session)
	    {
	    }

		protected override void OnBuild(Withdrawal instance)
		{

			instance.Description = this.Description;
		
		
			

			if(this.EntryDate.HasValue)
			{
				instance.EntryDate = this.EntryDate.Value;
			}			
		
		
			

			if(this.TransactionDate.HasValue)
			{
				instance.TransactionDate = this.TransactionDate.Value;
			}			
		
		

			instance.Disbursement = this.Disbursement;

		
			if(this.DeniedPermissions!=null)
			{
				instance.DeniedPermissions = this.DeniedPermissions.ToArray();
			}
		
			if(this.SecurityTokens!=null)
			{
				instance.SecurityTokens = this.SecurityTokens.ToArray();
			}
		
		}


				public Disbursement Disbursement {get; set;}

				/// <exclude/>
				public WithdrawalBuilder WithDisbursement(Disbursement value)
		        {
		            if(this.Disbursement!=null){throw new global::System.ArgumentException("One multicplicity");}
					this.Disbursement = value;
		            return this;
		        }		

				
				public global::System.String Description {get; set;}

				/// <exclude/>
				public WithdrawalBuilder WithDescription(global::System.String value)
		        {
				    if(this.Description!=null){throw new global::System.ArgumentException("One multicplicity");}
		            this.Description = value;
		            return this;
		        }	

				public global::System.DateTime? EntryDate {get; set;}

				/// <exclude/>
				public WithdrawalBuilder WithEntryDate(global::System.DateTime? value)
		        {
				    if(this.EntryDate!=null){throw new global::System.ArgumentException("One multicplicity");}
		            this.EntryDate = value;
		            return this;
		        }	

				public global::System.DateTime? TransactionDate {get; set;}

				/// <exclude/>
				public WithdrawalBuilder WithTransactionDate(global::System.DateTime? value)
		        {
				    if(this.TransactionDate!=null){throw new global::System.ArgumentException("One multicplicity");}
		            this.TransactionDate = value;
		            return this;
		        }	

				public global::System.Collections.Generic.List<Permission> DeniedPermissions {get; set;}	

				/// <exclude/>
				public WithdrawalBuilder WithDeniedPermission(Permission value)
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
				public WithdrawalBuilder WithSecurityToken(SecurityToken value)
		        {
					if(this.SecurityTokens == null)
					{
						this.SecurityTokens = new global::System.Collections.Generic.List<SecurityToken>(); 
					}
		            this.SecurityTokens.Add(value);
		            return this;
		        }		

				

	}

	public partial class Withdrawals : global::Allors.ObjectsBase<Withdrawal>
	{
		public Withdrawals(Allors.ISession session) : base(session)
		{
		}

		public Allors.Meta.MetaWithdrawal Meta
		{
			get
			{
				return Allors.Meta.MetaWithdrawal.Instance;
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