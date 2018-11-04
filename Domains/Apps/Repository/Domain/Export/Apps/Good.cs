namespace Allors.Repository
{
    using System;

    using Attributes;

    #region Allors
    [Id("e3e87d40-b4f0-4953-9716-db13b35d716b")]
    #endregion
    public partial class Good : Product
    {
        #region inherited properties

        public string InternalComment { get; set; }

        public ProductCategory PrimaryProductCategory { get; set; }

        public DateTime SupportDiscontinuationDate { get; set; }

        public DateTime SalesDiscontinuationDate { get; set; }

        public LocalisedText[] LocalisedNames { get; set; }

        public LocalisedText[] LocalisedDescriptions { get; set; }

        public string Description { get; set; }

        public PriceComponent[] VirtualProductPriceComponents { get; set; }

        public string IntrastatCode { get; set; }

        public ProductCategory[] ProductCategoriesExpanded { get; set; }

        public Product ProductComplement { get; set; }

        public Product[] Variants { get; set; }

        public string Name { get; set; }

        public DateTime IntroductionDate { get; set; }

        public Document[] Documents { get; set; }

        public Media[] ElectronicDocuments { get; set; }

        public UnitOfMeasure UnitOfMeasure { get; set; }

        public EstimatedProductCost[] EstimatedProductCosts { get; set; }

        public Product[] ProductObsolescences { get; set; }

        public VatRate VatRate { get; set; }

        public PriceComponent[] BasePrices { get; set; }

        public ProductCategory[] ProductCategories { get; set; }

        public Guid UniqueId { get; set; }

        public Permission[] DeniedPermissions { get; set; }

        public SecurityToken[] SecurityTokens { get; set; }

        public string Comment { get; set; }

        public LocalisedText[] LocalisedComments { get; set; }

        #endregion

        #region Allors
        [Id("1A5619BE-43D0-47CF-B906-0A15277B86A6")]
        [AssociationId("3E3E2DEE-FABB-41C3-A0DD-6A457A829A8C")]
        [RoleId("DE123A63-F0AC-41ED-9CF8-76ED588EA9E2")]
        [Indexed]
        #endregion
        [Multiplicity(Multiplicity.OneToMany)]
        [Required]
        [Workspace]
        public IGoodIdentification[] GoodIdentifications { get; set; }

        #region Allors
        [Id("4e8eceff-aec2-44f8-9820-4e417ed904c1")]
        [AssociationId("30f4ec83-5854-4a53-a594-ba1247d02b2f")]
        [RoleId("80361383-e1fc-4256-9b69-7cd43469d0de")]
        #endregion
        [Size(256)]
        [Workspace]
        public string BarCode { get; set; }

        #region Allors
        [Id("82295ab2-8488-4d7e-8703-9f7fbec55925")]
        [AssociationId("c1801b8f-013b-42ff-b02a-a6c9b0e361b8")]
        [RoleId("cdc45553-9c60-4c40-8c82-56c488ee6aae")]
        #endregion
        [Multiplicity(Multiplicity.ManyToOne)]
        [Indexed]
        [Workspace]
        public Part Part { get; set; }

        #region Allors
        [Id("acbe2dc6-63ad-4910-9752-4cab83e24afb")]
        [AssociationId("70d193cf-8985-4c25-84a5-31f4e2fd2a34")]
        [RoleId("73361510-c5a2-4c4f-afe5-94d2b9eaeea3")]
        #endregion
        [Multiplicity(Multiplicity.ManyToMany)]
        [Indexed]
        [Workspace]
        public Product[] ProductSubstitutions { get; set; }

        #region Allors
        [Id("e1ee15a9-f173-4d81-a11d-82abff076fb4")]
        [AssociationId("20928aed-02cc-4ea1-9640-cd31cb54ba13")]
        [RoleId("e1c65763-9c2d-4111-bca1-638a69490e99")]
        #endregion
        [Multiplicity(Multiplicity.ManyToMany)]
        [Indexed]
        [Workspace]
        public Product[] ProductIncompatibilities { get; set; }

        #region Allors
        [Id("f52c0b7e-dbc4-4082-a2b9-9b1a05ce7179")]
        [AssociationId("50478ca9-3eb4-487b-8c8a-6ff48d9155b5")]
        [RoleId("802b6cdb-873a-4455-9fa7-7f2267407f0f")]
        #endregion
        [Multiplicity(Multiplicity.OneToOne)]
        [Indexed]
        [Workspace]
        public Media PrimaryPhoto { get; set; }

        #region Allors
        [Id("C7FB85EB-CF47-4FE1-BD67-E2832E5893B9")]
        [AssociationId("1DE2FF68-A4CB-4244-8C34-6E9D08A6DFBF")]
        [RoleId("2A1DB194-1B06-498D-BA0D-C2FDA629A45D")]
        [Indexed]
        #endregion
        [Workspace]
        [Multiplicity(Multiplicity.ManyToMany)]
        public Media[] Photos { get; set; }

        #region Allors
        [Id("19449147-C4FB-4FB9-94AB-32B200DD519A")]
        [AssociationId("B6DA1EA1-8A1E-42D3-91AE-EA13C74BFC9A")]
        [RoleId("FB868E3C-D846-4FD8-B5B9-651EF7471C22")]
        #endregion
        [Workspace]
        [Size(-1)]
        public string Keywords { get; set; }

        #region inherited methods


        public void OnBuild(){}

        public void OnPostBuild(){}

        public void OnPreDerive(){}

        public void OnDerive(){}

        public void OnPostDerive(){}





        public void Delete(){}
        #endregion
    }
}