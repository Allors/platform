namespace Allors.Repository
{
    using System;

    using Attributes;

    #region Allors
    [Id("56b79619-d04a-4924-96e8-e3e7be9faa09")]
    #endregion
    public partial interface Product : Commentable, UniquelyIdentifiable, AccessControlledObject, Deletable
    {
        #region Allors
        [Id("7423a3e3-3619-4afa-ab67-e605b2a62e02")]
        [AssociationId("153ce3b0-0969-40d7-a766-1320ecaef8ac")]
        [RoleId("62228e49-a697-4f1f-8a85-6f1976afd7bb")]
        #endregion
        [Required]
        [Size(256)]
        [Workspace]
        string Name { get; set; }

        #region Allors
        [Id("EBF60298-05C0-4885-81F9-64E0BE4ACE40")]
        [AssociationId("17884E44-F24C-4DFB-A75F-86916799D2BC")]
        [RoleId("3F2A6134-FFF5-45A1-AE66-C0947CC9F28F")]
        #endregion
        [Multiplicity(Multiplicity.OneToMany)]
        [Indexed]
        [Workspace]
        LocalisedText[] LocalisedNames { get; set; }

        #region Allors
        [Id("0cbb9d37-20cf-4e0c-9099-07f1fcb88590")]
        [AssociationId("6ed33681-defd-4003-85e4-79b5ddce888f")]
        [RoleId("cf55a72e-6ca5-4315-af71-ad45ab17fdf3")]
        #endregion
        [Size(-1)]
        [Workspace]
        string Description { get; set; }

        #region Allors
        [Id("C8B9AF4A-9385-4225-A458-77EC3526A7B2")]
        [AssociationId("4DA0E61C-341C-42A6-AF5D-A3DD98535C55")]
        [RoleId("5358F7F2-D1CE-42B1-9CF5-A592D01466F9")]
        #endregion
        [Multiplicity(Multiplicity.OneToMany)]
        [Indexed]
        [Workspace]
        LocalisedText[] LocalisedDescriptions { get; set; }
        
        #region Allors
        [Id("D88189C8-735E-4A5A-B46F-AEFF4F1F0501")]
        [AssociationId("93F47711-09D1-45FE-9FCD-20C0AF122484")]
        [RoleId("97F9DCEE-ED7F-458A-BE81-D14579FD11C1")]
        #endregion
        [Workspace]
        [Size(-1)]
        string InternalComment { get; set; }

        #region Allors
        [Id("039a9481-940b-4953-a1b5-6c56f35a238b")]
        [AssociationId("ee6d841a-78f4-47c7-be8a-d4bd7ed81609")]
        [RoleId("922b63dc-1714-4cf2-aa0c-cb81831e59b1")]
        #endregion
        [Multiplicity(Multiplicity.ManyToOne)]
        [Indexed]
        [Workspace]
        ProductCategory PrimaryProductCategory { get; set; }
        
        #region Allors
        [Id("05a2e95a-e5f1-45bc-a8ca-4ebfad3290b5")]
        [AssociationId("1674a9e0-00de-45fa-bde4-63a716a31557")]
        [RoleId("594503f3-c081-46b3-9695-92b921c15a6b")]
        #endregion
        [Workspace]
        DateTime SupportDiscontinuationDate { get; set; }
        
        #region Allors
        [Id("0b283eb9-2972-47ae-80d8-1a7aa8f77673")]
        [AssociationId("aa3ccdc9-7286-4a82-912a-dd2e53c7410b")]
        [RoleId("487e408f-d55b-4273-bbe9-b0291069ae42")]
        #endregion
        [Workspace]
        DateTime SalesDiscontinuationDate { get; set; }

        #region Allors
        [Id("28f34f5d-c98c-45f8-9534-ce9191587ac8")]
        [AssociationId("7c676669-52b3-4665-8212-e2e14dde5cf9")]
        [RoleId("5931ff6f-0972-4e9b-9dc3-dd072ed935a3")]
        #endregion
        [Multiplicity(Multiplicity.OneToMany)]
        [Derived]
        [Indexed]
        PriceComponent[] VirtualProductPriceComponents { get; set; }

        #region Allors
        [Id("345aaf52-424a-4573-b77b-64708665822f")]
        [AssociationId("be3a7b3a-bf77-407e-895a-3609bbf05e24")]
        [RoleId("be85293b-25b0-4856-b9cf-19fe7f0e6a3d")]
        #endregion
        [Size(256)]
        string IntrastatCode { get; set; }

        #region Allors
        [Id("438f00fe-750a-414d-a498-a03095c086fb")]
        [AssociationId("62a5b5f3-0572-4f17-8f1b-10c9ee9048f4")]
        [RoleId("e051a24d-f2de-439c-923a-39cf6c47a0e4")]
        #endregion
        [Multiplicity(Multiplicity.ManyToMany)]
        [Derived]
        [Indexed]
        ProductCategory[] ProductCategoriesExpanded { get; set; }

        #region Allors
        [Id("4632101d-09d6-4a89-8bba-e02ac791f9ad")]
        [AssociationId("3aed43b7-3bad-44f9-a2d9-8f865de71156")]
        [RoleId("de3785d8-0143-4339-bf49-310c13de385a")]
        #endregion
        [Multiplicity(Multiplicity.ManyToOne)]
        [Indexed]
        [Workspace]
        Product ProductComplement { get; set; }

        #region Allors
        [Id("5735f671-6c52-474b-83a9-3dd8765af241")]
        [AssociationId("4abbf18f-1f97-4fec-8e85-805432e65e53")]
        [RoleId("c485cfba-d3fe-46c2-8495-ddb63c8b4f56")]
        #endregion
        [Multiplicity(Multiplicity.ManyToMany)]
        [Indexed]
        [Workspace]
        ProductFeature[] OptionalFeatures { get; set; }

        #region Allors
        [Id("60bd113a-d6b9-4de9-bbff-2b5094ec4803")]
        [AssociationId("b5198a54-72bc-4972-aded-b8eaf0f304a0")]
        [RoleId("1c2134b2-d7ce-469a-a6e4-7e2cc741e07c")]
        #endregion
        [Multiplicity(Multiplicity.OneToMany)]
        [Indexed]
        [Workspace]
        Product[] Variants { get; set; }

        #region Allors
        [Id("74fc9be0-8677-463c-b3b6-f0e7bb7478ba")]
        [AssociationId("23a3e0bb-a2f9-48d5-b57b-40376e68b0ba")]
        [RoleId("c977306e-8738-4e30-88c1-3c545fdb4e93")]
        #endregion
        [Workspace]
        DateTime IntroductionDate { get; set; }

        #region Allors
        [Id("7c41deee-b270-4810-abaa-6d00e6507b9b")]
        [AssociationId("72d6f463-2335-44bc-830f-816ee635101b")]
        [RoleId("8926c093-d513-44dd-9324-3accc051cb06")]
        #endregion
        [Multiplicity(Multiplicity.ManyToMany)]
        [Indexed]
        [Workspace]
        Document[] Documents { get; set; }

        #region Allors
        [Id("8645a62d-b230-4378-b4a2-f7ab64c99e58")]
        [AssociationId("f9d855e4-d16b-4d63-9654-a1b455aaa0db")]
        [RoleId("63a361ba-030b-4c95-91a6-ce9131dede95")]
        #endregion
        [Multiplicity(Multiplicity.ManyToMany)]
        [Indexed]
        [Workspace]
        ProductFeature[] StandardFeatures { get; set; }

        #region Allors
        [Id("9b66342e-48ac-4761-b375-b9b60d94b005")]
        [AssociationId("fcb1a5ad-544f-4613-a160-077d9130732f")]
        [RoleId("76542b1d-9085-451c-9110-85bfac863016")]
        #endregion
        [Multiplicity(Multiplicity.ManyToOne)]
        [Indexed]
        [Workspace]
        UnitOfMeasure UnitOfMeasure { get; set; }

        #region Allors
        [Id("c018edeb-54e0-43d5-9bbd-bf68df1364de")]
        [AssociationId("2ad88d44-a7f6-41f7-bcf7-fee094f20e22")]
        [RoleId("cd7f09d5-8c4b-46b7-98d1-108f5e910cc3")]
        #endregion
        [Multiplicity(Multiplicity.OneToMany)]
        [Workspace]
        [Indexed]
        EstimatedProductCost[] EstimatedProductCosts { get; set; }

        #region Allors
        [Id("e6f084e9-e6fe-49b8-940e-cda85e1dc1e0")]
        [AssociationId("7eb974af-86a6-4d26-a07f-7dd01b80d3ac")]
        [RoleId("3918335f-7cde-4fd2-b168-fb422ab5ee1a")]
        #endregion
        [Multiplicity(Multiplicity.ManyToMany)]
        [Indexed]
        [Workspace]
        Product[] ProductObsolescences { get; set; }

        #region Allors
        [Id("ecc755c1-9a64-42a2-88b6-0278c3598498")]
        [AssociationId("d7b3ed79-4733-4d16-9b88-8c05ff684d2a")]
        [RoleId("825e5e8f-d0ac-490e-8511-0596e2952482")]
        #endregion
        [Multiplicity(Multiplicity.ManyToMany)]
        [Indexed]
        [Workspace]
        ProductFeature[] SelectableFeatures { get; set; }

        #region Allors
        [Id("f26e4376-4e3f-4d7d-8814-54d19c977a76")]
        [AssociationId("7da35b67-dbf4-46ce-9f53-d6af8b4e208d")]
        [RoleId("2c8e75e5-e030-4108-b528-c16aaeea40b8")]
        #endregion
        [Multiplicity(Multiplicity.ManyToOne)]
        [Indexed]
        [Required]
        [Workspace]
        VatRate VatRate { get; set; }

        #region Allors
        [Id("f2abc02c-67a1-42b7-83f5-195841e58a6a")]
        [AssociationId("dae3b48d-0dde-4c71-bbd3-4f7743d20a9f")]
        [RoleId("fe8dd3c4-0540-49d9-a18a-905fe0259ca1")]
        #endregion
        [Multiplicity(Multiplicity.ManyToMany)]
        [Derived]
        [Indexed]
        [Workspace]
        PriceComponent[] BasePrices { get; set; }

        #region Allors
        [Id("f8cc75cb-d328-42ac-a1e7-c490435ed7a4")]
        [AssociationId("61f71101-6877-4751-aad1-d3ab194dc6ce")]
        [RoleId("1dbceee7-811b-4bfe-8cd4-177f41cb6d17")]
        #endregion
        [Multiplicity(Multiplicity.ManyToMany)]
        [Indexed]
        [Workspace]
        ProductCategory[] ProductCategories { get; set; }
    }
}