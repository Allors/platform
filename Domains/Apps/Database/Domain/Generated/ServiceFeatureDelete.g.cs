// Allors generated file. 
// Do not edit this file, changes will be overwritten.
namespace Allors.Domain
{
	public partial class ServiceFeatureDelete : Allors.Meta.Method
	{
	    private static readonly Allors.Meta.MethodInvocation ServiceFeatureDeleteInvocation = new Allors.Meta.MethodInvocation(Allors.Meta.M.ServiceFeature.ObjectType, Allors.Meta.M.ServiceFeature.Delete); 

		public ServiceFeatureDelete(ServiceFeature @object) : base(@object)
		{
		}

		public override Allors.Meta.MethodInvocation MethodInvocation
		{
			get
			{
				return ServiceFeatureDeleteInvocation;
			}
		}
	}
}