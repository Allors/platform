// Allors generated file. 
// Do not edit this file, changes will be overwritten.
namespace Allors.Domain
{
	public partial class OrganisationContactRelationship : Allors.IObject , PartyRelationship
	{
		private readonly IStrategy strategy;

		public OrganisationContactRelationship(Allors.IStrategy strategy) 
		{
			this.strategy = strategy;
		}

		public Allors.Meta.MetaOrganisationContactRelationship Meta
		{
			get
			{
				return Allors.Meta.MetaOrganisationContactRelationship.Instance;
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

		public static OrganisationContactRelationship Instantiate (Allors.ISession allorsSession, string allorsObjectId)
		{
			return (OrganisationContactRelationship) allorsSession.Instantiate(allorsObjectId);		
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



		virtual public Person Contact
		{ 
			get
			{
				return (Person) Strategy.GetCompositeRole(Meta.Contact.RelationType);
			}
			set
			{
				Strategy.SetCompositeRole(Meta.Contact.RelationType, value);
			}
		}

		virtual public bool ExistContact
		{
			get
			{
				return Strategy.ExistCompositeRole(Meta.Contact.RelationType);
			}
		}

		virtual public void RemoveContact()
		{
			Strategy.RemoveCompositeRole(Meta.Contact.RelationType);
		}


		virtual public Organisation Organisation
		{ 
			get
			{
				return (Organisation) Strategy.GetCompositeRole(Meta.Organisation.RelationType);
			}
			set
			{
				Strategy.SetCompositeRole(Meta.Organisation.RelationType, value);
			}
		}

		virtual public bool ExistOrganisation
		{
			get
			{
				return Strategy.ExistCompositeRole(Meta.Organisation.RelationType);
			}
		}

		virtual public void RemoveOrganisation()
		{
			Strategy.RemoveCompositeRole(Meta.Organisation.RelationType);
		}


		virtual public global::Allors.Extent<OrganisationContactKind> ContactKinds
		{ 
			get
			{
				return Strategy.GetCompositeRoles(Meta.ContactKinds.RelationType);
			}
			set
			{
				Strategy.SetCompositeRoles(Meta.ContactKinds.RelationType, value);
			}
		}

		virtual public void AddContactKind (OrganisationContactKind value)
		{
			Strategy.AddCompositeRole(Meta.ContactKinds.RelationType, value);
		}

		virtual public void RemoveContactKind (OrganisationContactKind value)
		{
			Strategy.RemoveCompositeRole(Meta.ContactKinds.RelationType, value);
		}

		virtual public bool ExistContactKinds
		{
			get
			{
				return Strategy.ExistCompositeRoles(Meta.ContactKinds.RelationType);
			}
		}

		virtual public void RemoveContactKinds()
		{
			Strategy.RemoveCompositeRoles(Meta.ContactKinds.RelationType);
		}


		virtual public global::Allors.Extent<Party> Parties
		{ 
			get
			{
				return Strategy.GetCompositeRoles(Meta.Parties.RelationType);
			}
			set
			{
				Strategy.SetCompositeRoles(Meta.Parties.RelationType, value);
			}
		}

		virtual public void AddParty (Party value)
		{
			Strategy.AddCompositeRole(Meta.Parties.RelationType, value);
		}

		virtual public void RemoveParty (Party value)
		{
			Strategy.RemoveCompositeRole(Meta.Parties.RelationType, value);
		}

		virtual public bool ExistParties
		{
			get
			{
				return Strategy.ExistCompositeRoles(Meta.Parties.RelationType);
			}
		}

		virtual public void RemoveParties()
		{
			Strategy.RemoveCompositeRoles(Meta.Parties.RelationType);
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



		virtual public global::Allors.Extent<Engagement> EngagementsWhereTakenViaOrganisationContactRelationship
		{ 
			get
			{
				return Strategy.GetCompositeAssociations(Meta.EngagementsWhereTakenViaOrganisationContactRelationship.RelationType);
			}
		}

		virtual public bool ExistEngagementsWhereTakenViaOrganisationContactRelationship
		{
			get
			{
				return Strategy.ExistCompositeAssociations(Meta.EngagementsWhereTakenViaOrganisationContactRelationship.RelationType);
			}
		}


		virtual public global::Allors.Extent<PartyVersion> PartyVersionsWhereInactiveOrganisationContactRelationship
		{ 
			get
			{
				return Strategy.GetCompositeAssociations(Meta.PartyVersionsWhereInactiveOrganisationContactRelationship.RelationType);
			}
		}

		virtual public bool ExistPartyVersionsWhereInactiveOrganisationContactRelationship
		{
			get
			{
				return Strategy.ExistCompositeAssociations(Meta.PartyVersionsWhereInactiveOrganisationContactRelationship.RelationType);
			}
		}


		virtual public global::Allors.Extent<PartyVersion> PartyVersionsWhereCurrentOrganisationContactRelationship
		{ 
			get
			{
				return Strategy.GetCompositeAssociations(Meta.PartyVersionsWhereCurrentOrganisationContactRelationship.RelationType);
			}
		}

		virtual public bool ExistPartyVersionsWhereCurrentOrganisationContactRelationship
		{
			get
			{
				return Strategy.ExistCompositeAssociations(Meta.PartyVersionsWhereCurrentOrganisationContactRelationship.RelationType);
			}
		}


		virtual public global::Allors.Extent<Party> PartiesWhereInactiveOrganisationContactRelationship
		{ 
			get
			{
				return Strategy.GetCompositeAssociations(Meta.PartiesWhereInactiveOrganisationContactRelationship.RelationType);
			}
		}

		virtual public bool ExistPartiesWhereInactiveOrganisationContactRelationship
		{
			get
			{
				return Strategy.ExistCompositeAssociations(Meta.PartiesWhereInactiveOrganisationContactRelationship.RelationType);
			}
		}


		virtual public global::Allors.Extent<Party> PartiesWhereCurrentOrganisationContactRelationship
		{ 
			get
			{
				return Strategy.GetCompositeAssociations(Meta.PartiesWhereCurrentOrganisationContactRelationship.RelationType);
			}
		}

		virtual public bool ExistPartiesWhereCurrentOrganisationContactRelationship
		{
			get
			{
				return Strategy.ExistCompositeAssociations(Meta.PartiesWhereCurrentOrganisationContactRelationship.RelationType);
			}
		}



		public ObjectOnBuild OnBuild()
		{ 
			var method = new OrganisationContactRelationshipOnBuild(this);
            method.Execute();
            return method;
		}

		public ObjectOnBuild OnBuild(System.Action<ObjectOnBuild> action)
		{ 
			var method = new OrganisationContactRelationshipOnBuild(this);
            action(method);
            method.Execute();
            return method;
		}

		public ObjectOnPostBuild OnPostBuild()
		{ 
			var method = new OrganisationContactRelationshipOnPostBuild(this);
            method.Execute();
            return method;
		}

		public ObjectOnPostBuild OnPostBuild(System.Action<ObjectOnPostBuild> action)
		{ 
			var method = new OrganisationContactRelationshipOnPostBuild(this);
            action(method);
            method.Execute();
            return method;
		}

		public ObjectOnPreDerive OnPreDerive()
		{ 
			var method = new OrganisationContactRelationshipOnPreDerive(this);
            method.Execute();
            return method;
		}

		public ObjectOnPreDerive OnPreDerive(System.Action<ObjectOnPreDerive> action)
		{ 
			var method = new OrganisationContactRelationshipOnPreDerive(this);
            action(method);
            method.Execute();
            return method;
		}

		public ObjectOnDerive OnDerive()
		{ 
			var method = new OrganisationContactRelationshipOnDerive(this);
            method.Execute();
            return method;
		}

		public ObjectOnDerive OnDerive(System.Action<ObjectOnDerive> action)
		{ 
			var method = new OrganisationContactRelationshipOnDerive(this);
            action(method);
            method.Execute();
            return method;
		}

		public ObjectOnPostDerive OnPostDerive()
		{ 
			var method = new OrganisationContactRelationshipOnPostDerive(this);
            method.Execute();
            return method;
		}

		public ObjectOnPostDerive OnPostDerive(System.Action<ObjectOnPostDerive> action)
		{ 
			var method = new OrganisationContactRelationshipOnPostDerive(this);
            action(method);
            method.Execute();
            return method;
		}

		public DeletableDelete Delete()
		{ 
			var method = new OrganisationContactRelationshipDelete(this);
            method.Execute();
            return method;
		}

		public DeletableDelete Delete(System.Action<DeletableDelete> action)
		{ 
			var method = new OrganisationContactRelationshipDelete(this);
            action(method);
            method.Execute();
            return method;
		}
	}

	public partial class OrganisationContactRelationshipBuilder : Allors.ObjectBuilder<OrganisationContactRelationship> , PartyRelationshipBuilder, global::System.IDisposable
	{		
		public OrganisationContactRelationshipBuilder(Allors.ISession session) : base(session)
	    {
	    }

		protected override void OnBuild(OrganisationContactRelationship instance)
		{
			

			if(this.FromDate.HasValue)
			{
				instance.FromDate = this.FromDate.Value;
			}			
		
		
			

			if(this.ThroughDate.HasValue)
			{
				instance.ThroughDate = this.ThroughDate.Value;
			}			
		
		

			instance.Contact = this.Contact;

		

			instance.Organisation = this.Organisation;

		
			if(this.ContactKinds!=null)
			{
				instance.ContactKinds = this.ContactKinds.ToArray();
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


				public Person Contact {get; set;}

				/// <exclude/>
				public OrganisationContactRelationshipBuilder WithContact(Person value)
		        {
		            if(this.Contact!=null){throw new global::System.ArgumentException("One multicplicity");}
					this.Contact = value;
		            return this;
		        }		

				
				public Organisation Organisation {get; set;}

				/// <exclude/>
				public OrganisationContactRelationshipBuilder WithOrganisation(Organisation value)
		        {
		            if(this.Organisation!=null){throw new global::System.ArgumentException("One multicplicity");}
					this.Organisation = value;
		            return this;
		        }		

				
				public global::System.Collections.Generic.List<OrganisationContactKind> ContactKinds {get; set;}	

				/// <exclude/>
				public OrganisationContactRelationshipBuilder WithContactKind(OrganisationContactKind value)
		        {
					if(this.ContactKinds == null)
					{
						this.ContactKinds = new global::System.Collections.Generic.List<OrganisationContactKind>(); 
					}
		            this.ContactKinds.Add(value);
		            return this;
		        }		

				
				public global::System.DateTime? FromDate {get; set;}

				/// <exclude/>
				public OrganisationContactRelationshipBuilder WithFromDate(global::System.DateTime? value)
		        {
				    if(this.FromDate!=null){throw new global::System.ArgumentException("One multicplicity");}
		            this.FromDate = value;
		            return this;
		        }	

				public global::System.DateTime? ThroughDate {get; set;}

				/// <exclude/>
				public OrganisationContactRelationshipBuilder WithThroughDate(global::System.DateTime? value)
		        {
				    if(this.ThroughDate!=null){throw new global::System.ArgumentException("One multicplicity");}
		            this.ThroughDate = value;
		            return this;
		        }	

				public global::System.Collections.Generic.List<Permission> DeniedPermissions {get; set;}	

				/// <exclude/>
				public OrganisationContactRelationshipBuilder WithDeniedPermission(Permission value)
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
				public OrganisationContactRelationshipBuilder WithSecurityToken(SecurityToken value)
		        {
					if(this.SecurityTokens == null)
					{
						this.SecurityTokens = new global::System.Collections.Generic.List<SecurityToken>(); 
					}
		            this.SecurityTokens.Add(value);
		            return this;
		        }		

				

	}

	public partial class OrganisationContactRelationships : global::Allors.ObjectsBase<OrganisationContactRelationship>
	{
		public OrganisationContactRelationships(Allors.ISession session) : base(session)
		{
		}

		public Allors.Meta.MetaOrganisationContactRelationship Meta
		{
			get
			{
				return Allors.Meta.MetaOrganisationContactRelationship.Instance;
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