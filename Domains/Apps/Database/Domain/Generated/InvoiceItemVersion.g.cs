// Allors generated file. 
// Do not edit this file, changes will be overwritten.
namespace Allors.Domain
{
	public partial interface InvoiceItemVersion :  PriceableVersion, Allors.IObject
	{


		global::System.String InternalComment 
		{
			get;
			set;
		}

		bool ExistInternalComment{get;}

		void RemoveInternalComment();


		global::Allors.Extent<AgreementTerm> InvoiceTerms
		{ 
			get;
			set;
		}

		void AddInvoiceTerm (AgreementTerm value);

		void RemoveInvoiceTerm (AgreementTerm value);

		bool ExistInvoiceTerms
		{
			get;
		}

		void RemoveInvoiceTerms();


		global::System.Decimal TotalInvoiceAdjustment 
		{
			get;
			set;
		}

		bool ExistTotalInvoiceAdjustment{get;}

		void RemoveTotalInvoiceAdjustment();


		global::Allors.Extent<InvoiceVatRateItem> InvoiceVatRateItems
		{ 
			get;
			set;
		}

		void AddInvoiceVatRateItem (InvoiceVatRateItem value);

		void RemoveInvoiceVatRateItem (InvoiceVatRateItem value);

		bool ExistInvoiceVatRateItems
		{
			get;
		}

		void RemoveInvoiceVatRateItems();


		InvoiceItem AdjustmentFor
		{ 
			get;
			set;
		}

		bool ExistAdjustmentFor
		{
			get;
		}

		void RemoveAdjustmentFor();


		SerialisedInventoryItem SerializedInventoryItem
		{ 
			get;
			set;
		}

		bool ExistSerializedInventoryItem
		{
			get;
		}

		void RemoveSerializedInventoryItem();


		global::System.String Message 
		{
			get;
			set;
		}

		bool ExistMessage{get;}

		void RemoveMessage();


		global::System.Decimal TotalInvoiceAdjustmentCustomerCurrency 
		{
			get;
			set;
		}

		bool ExistTotalInvoiceAdjustmentCustomerCurrency{get;}

		void RemoveTotalInvoiceAdjustmentCustomerCurrency();


		global::System.Decimal AmountPaid 
		{
			get;
			set;
		}

		bool ExistAmountPaid{get;}

		void RemoveAmountPaid();


		global::System.Decimal Quantity 
		{
			get;
			set;
		}

		bool ExistQuantity{get;}

		void RemoveQuantity();


		global::System.String Description 
		{
			get;
			set;
		}

		bool ExistDescription{get;}

		void RemoveDescription();

	}

	public partial interface InvoiceItemVersionBuilder : PriceableVersionBuilder , global::System.IDisposable
	{	
		global::System.String InternalComment {get;}
		


		global::System.Collections.Generic.List<AgreementTerm> InvoiceTerms {get;}		

		


		global::System.Collections.Generic.List<InvoiceVatRateItem> InvoiceVatRateItems {get;}		

		

		InvoiceItem AdjustmentFor {get;}

		

		SerialisedInventoryItem SerializedInventoryItem {get;}

		

		global::System.String Message {get;}
		

		global::System.Decimal? Quantity {get;}
		

		global::System.String Description {get;}
		

	}

	public partial class InvoiceItemVersions : global::Allors.ObjectsBase<InvoiceItemVersion>
	{
		public InvoiceItemVersions(Allors.ISession session) : base(session)
		{
		}

		public Allors.Meta.MetaInvoiceItemVersion Meta
		{
			get
			{
				return Allors.Meta.MetaInvoiceItemVersion.Instance;
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