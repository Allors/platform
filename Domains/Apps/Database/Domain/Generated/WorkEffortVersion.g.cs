// Allors generated file. 
// Do not edit this file, changes will be overwritten.
namespace Allors.Domain
{
	public partial interface WorkEffortVersion :  Version, Allors.IObject
	{


		WorkEffortState WorkEffortState
		{ 
			get;
			set;
		}

		bool ExistWorkEffortState
		{
			get;
		}

		void RemoveWorkEffortState();


		SecurityToken OwnerSecurityToken
		{ 
			get;
			set;
		}

		bool ExistOwnerSecurityToken
		{
			get;
		}

		void RemoveOwnerSecurityToken();


		AccessControl OwnerAccessControl
		{ 
			get;
			set;
		}

		bool ExistOwnerAccessControl
		{
			get;
		}

		void RemoveOwnerAccessControl();


		global::System.String Name 
		{
			get;
			set;
		}

		bool ExistName{get;}

		void RemoveName();


		global::System.String Description 
		{
			get;
			set;
		}

		bool ExistDescription{get;}

		void RemoveDescription();


		Priority Priority
		{ 
			get;
			set;
		}

		bool ExistPriority
		{
			get;
		}

		void RemovePriority();


		global::Allors.Extent<WorkEffortPurpose> WorkEffortPurposes
		{ 
			get;
			set;
		}

		void AddWorkEffortPurpose (WorkEffortPurpose value);

		void RemoveWorkEffortPurpose (WorkEffortPurpose value);

		bool ExistWorkEffortPurposes
		{
			get;
		}

		void RemoveWorkEffortPurposes();


		global::System.DateTime? ActualCompletion 
		{
			get;
			set;
		}

		bool ExistActualCompletion{get;}

		void RemoveActualCompletion();


		global::System.DateTime? ScheduledStart 
		{
			get;
			set;
		}

		bool ExistScheduledStart{get;}

		void RemoveScheduledStart();


		global::System.DateTime? ScheduledCompletion 
		{
			get;
			set;
		}

		bool ExistScheduledCompletion{get;}

		void RemoveScheduledCompletion();


		global::System.Decimal? ActualHours 
		{
			get;
			set;
		}

		bool ExistActualHours{get;}

		void RemoveActualHours();


		global::System.Decimal? EstimatedHours 
		{
			get;
			set;
		}

		bool ExistEstimatedHours{get;}

		void RemoveEstimatedHours();


		global::Allors.Extent<WorkEffort> Precendencies
		{ 
			get;
			set;
		}

		void AddPrecendency (WorkEffort value);

		void RemovePrecendency (WorkEffort value);

		bool ExistPrecendencies
		{
			get;
		}

		void RemovePrecendencies();


		Facility Facility
		{ 
			get;
			set;
		}

		bool ExistFacility
		{
			get;
		}

		void RemoveFacility();


		global::Allors.Extent<Deliverable> DeliverablesProduced
		{ 
			get;
			set;
		}

		void AddDeliverablesProduced (Deliverable value);

		void RemoveDeliverablesProduced (Deliverable value);

		bool ExistDeliverablesProduced
		{
			get;
		}

		void RemoveDeliverablesProduced();


		global::System.DateTime? ActualStart 
		{
			get;
			set;
		}

		bool ExistActualStart{get;}

		void RemoveActualStart();


		global::Allors.Extent<WorkEffortInventoryAssignment> InventoryItemsNeeded
		{ 
			get;
			set;
		}

		void AddInventoryItemsNeeded (WorkEffortInventoryAssignment value);

		void RemoveInventoryItemsNeeded (WorkEffortInventoryAssignment value);

		bool ExistInventoryItemsNeeded
		{
			get;
		}

		void RemoveInventoryItemsNeeded();


		global::Allors.Extent<WorkEffort> Children
		{ 
			get;
			set;
		}

		void AddChild (WorkEffort value);

		void RemoveChild (WorkEffort value);

		bool ExistChildren
		{
			get;
		}

		void RemoveChildren();


		OrderItem OrderItemFulfillment
		{ 
			get;
			set;
		}

		bool ExistOrderItemFulfillment
		{
			get;
		}

		void RemoveOrderItemFulfillment();


		WorkEffortType WorkEffortType
		{ 
			get;
			set;
		}

		bool ExistWorkEffortType
		{
			get;
		}

		void RemoveWorkEffortType();


		global::Allors.Extent<InventoryItem> InventoryItemsProduced
		{ 
			get;
			set;
		}

		void AddInventoryItemsProduced (InventoryItem value);

		void RemoveInventoryItemsProduced (InventoryItem value);

		bool ExistInventoryItemsProduced
		{
			get;
		}

		void RemoveInventoryItemsProduced();


		global::Allors.Extent<Requirement> RequirementFulfillments
		{ 
			get;
			set;
		}

		void AddRequirementFulfillment (Requirement value);

		void RemoveRequirementFulfillment (Requirement value);

		bool ExistRequirementFulfillments
		{
			get;
		}

		void RemoveRequirementFulfillments();


		global::System.String SpecialTerms 
		{
			get;
			set;
		}

		bool ExistSpecialTerms{get;}

		void RemoveSpecialTerms();


		global::Allors.Extent<WorkEffort> Concurrencies
		{ 
			get;
			set;
		}

		void AddConcurrency (WorkEffort value);

		void RemoveConcurrency (WorkEffort value);

		bool ExistConcurrencies
		{
			get;
		}

		void RemoveConcurrencies();

	}

	public partial interface WorkEffortVersionBuilder : VersionBuilder , global::System.IDisposable
	{	
		WorkEffortState WorkEffortState {get;}

		

		global::System.String Name {get;}
		

		global::System.String Description {get;}
		

		Priority Priority {get;}

		


		global::System.Collections.Generic.List<WorkEffortPurpose> WorkEffortPurposes {get;}		

		

		global::System.DateTime? ActualCompletion {get;}
		

		global::System.DateTime? ScheduledStart {get;}
		

		global::System.DateTime? ScheduledCompletion {get;}
		

		global::System.Decimal? ActualHours {get;}
		

		global::System.Decimal? EstimatedHours {get;}
		


		global::System.Collections.Generic.List<WorkEffort> Precendencies {get;}		

		

		Facility Facility {get;}

		


		global::System.Collections.Generic.List<Deliverable> DeliverablesProduced {get;}		

		

		global::System.DateTime? ActualStart {get;}
		


		global::System.Collections.Generic.List<WorkEffortInventoryAssignment> InventoryItemsNeeded {get;}		

		


		global::System.Collections.Generic.List<WorkEffort> Children {get;}		

		

		OrderItem OrderItemFulfillment {get;}

		

		WorkEffortType WorkEffortType {get;}

		


		global::System.Collections.Generic.List<InventoryItem> InventoryItemsProduced {get;}		

		


		global::System.Collections.Generic.List<Requirement> RequirementFulfillments {get;}		

		

		global::System.String SpecialTerms {get;}
		


		global::System.Collections.Generic.List<WorkEffort> Concurrencies {get;}		

		

	}

	public partial class WorkEffortVersions : global::Allors.ObjectsBase<WorkEffortVersion>
	{
		public WorkEffortVersions(Allors.ISession session) : base(session)
		{
		}

		public Allors.Meta.MetaWorkEffortVersion Meta
		{
			get
			{
				return Allors.Meta.MetaWorkEffortVersion.Instance;
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