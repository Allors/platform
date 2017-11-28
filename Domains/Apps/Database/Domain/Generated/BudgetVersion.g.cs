// Allors generated file. 
// Do not edit this file, changes will be overwritten.
namespace Allors.Domain
{
	public partial interface BudgetVersion :  Version, Allors.IObject
	{


		BudgetState BudgetState
		{ 
			get;
			set;
		}

		bool ExistBudgetState
		{
			get;
		}

		void RemoveBudgetState();


		global::System.DateTime FromDate 
		{
			get;
			set;
		}

		bool ExistFromDate{get;}

		void RemoveFromDate();


		global::System.DateTime? ThroughDate 
		{
			get;
			set;
		}

		bool ExistThroughDate{get;}

		void RemoveThroughDate();


		global::System.String Comment 
		{
			get;
			set;
		}

		bool ExistComment{get;}

		void RemoveComment();


		global::System.String Description 
		{
			get;
			set;
		}

		bool ExistDescription{get;}

		void RemoveDescription();


		global::Allors.Extent<BudgetRevision> BudgetRevisions
		{ 
			get;
			set;
		}

		void AddBudgetRevision (BudgetRevision value);

		void RemoveBudgetRevision (BudgetRevision value);

		bool ExistBudgetRevisions
		{
			get;
		}

		void RemoveBudgetRevisions();


		global::System.String BudgetNumber 
		{
			get;
			set;
		}

		bool ExistBudgetNumber{get;}

		void RemoveBudgetNumber();


		global::Allors.Extent<BudgetReview> BudgetReviews
		{ 
			get;
			set;
		}

		void AddBudgetReview (BudgetReview value);

		void RemoveBudgetReview (BudgetReview value);

		bool ExistBudgetReviews
		{
			get;
		}

		void RemoveBudgetReviews();


		global::Allors.Extent<BudgetItem> BudgetItems
		{ 
			get;
			set;
		}

		void AddBudgetItem (BudgetItem value);

		void RemoveBudgetItem (BudgetItem value);

		bool ExistBudgetItems
		{
			get;
		}

		void RemoveBudgetItems();

	}

	public partial interface BudgetVersionBuilder : VersionBuilder , global::System.IDisposable
	{	
		BudgetState BudgetState {get;}

		

		global::System.DateTime? FromDate {get;}
		

		global::System.DateTime? ThroughDate {get;}
		

		global::System.String Comment {get;}
		

		global::System.String Description {get;}
		


		global::System.Collections.Generic.List<BudgetRevision> BudgetRevisions {get;}		

		

		global::System.String BudgetNumber {get;}
		


		global::System.Collections.Generic.List<BudgetReview> BudgetReviews {get;}		

		


		global::System.Collections.Generic.List<BudgetItem> BudgetItems {get;}		

		

	}

	public partial class BudgetVersions : global::Allors.ObjectsBase<BudgetVersion>
	{
		public BudgetVersions(Allors.ISession session) : base(session)
		{
		}

		public Allors.Meta.MetaBudgetVersion Meta
		{
			get
			{
				return Allors.Meta.MetaBudgetVersion.Instance;
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