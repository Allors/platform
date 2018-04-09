namespace Allors.Repository
{
    using System;

    using Attributes;

    #region Allors
    [Id("dc54aafb-f0f2-4f72-8a81-d5b2fc792b86")]
    #endregion
    public partial class Property : FixedAsset 
    {
        #region inherited properties
        public string Name { get; set; }

        public DateTime LastServiceDate { get; set; }

        public DateTime AcquiredDate { get; set; }

        public string Description { get; set; }

        public decimal ProductionCapacity { get; set; }

        public DateTime NextServiceDate { get; set; }

        public Permission[] DeniedPermissions { get; set; }

        public SecurityToken[] SecurityTokens { get; set; }

        #endregion


        #region inherited methods


        public void OnBuild(){}

        public void OnPostBuild(){}

        public void OnPreDerive(){}

        public void OnDerive(){}

        public void OnPostDerive(){}


        #endregion

    }
}