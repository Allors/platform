// <copyright file="PathTests.cs" company="Allors bvba">
// Copyright (c) Allors bvba. All rights reserved.
// Licensed under the LGPL license. See LICENSE file in the project root for full license information.
// </copyright>

namespace Tests
{
    using System.Collections.Generic;

    using Allors;
    using Allors.Data;
    using Allors.Domain;
    using Allors.Meta;

    using Moq;

    using Xunit;

    public class PathTests : DomainTest
    {
        private static Mock<IAccessControlListFactory> AclFactoryMock
        {
            get
            {
                var aclMock = new Mock<IAccessControlList>();
                aclMock.Setup(acl => acl.CanRead(It.IsAny<IPropertyType>())).Returns(true);
                aclMock.Setup(acl => acl.CanRead(It.IsAny<IConcreteRoleType>())).Returns(true);
                var aclFactoryMock = new Mock<IAccessControlListFactory>();
                aclFactoryMock.Setup(aclFactory => aclFactory.Create(It.IsAny<IObject>())).Returns(aclMock.Object);
                return aclFactoryMock;
            }
        }

        [Fact]
        public void One2ManyWithPropertyTypes()
        {
            var c2A = new C2Builder(this.Session).WithC2AllorsString("c2A").Build();
            var c2B = new C2Builder(this.Session).WithC2AllorsString("c2B").Build();
            var c2C = new C2Builder(this.Session).WithC2AllorsString("c2C").Build();

            var c1a = new C1Builder(this.Session)
                .WithC1AllorsString("c1A")
                .WithC1C2One2Many(c2A)
                .Build();

            var c1b = new C1Builder(this.Session)
                .WithC1AllorsString("c1B")
                .WithC1C2One2Many(c2B)
                .WithC1C2One2Many(c2C)
                .Build();

            this.Session.Derive(true);

            var path = new Fetch(M.C1.C1C2One2Manies, M.C2.C2AllorsString);

            var aclFactoryMock = AclFactoryMock;

            var result = (ISet<object>)path.Get(c1a, aclFactoryMock.Object);
            Assert.Equal(1, result.Count);
            Assert.True(result.Contains("c2A"));

            result = (ISet<object>)path.Get(c1b, aclFactoryMock.Object);
            Assert.Equal(2, result.Count);
            Assert.True(result.Contains("c2B"));
            Assert.True(result.Contains("c2C"));
        }

        [Fact]
        public void One2ManyWithPropertyTypeIds()
        {
            var c2A = new C2Builder(this.Session).WithC2AllorsString("c2A").Build();
            var c2B = new C2Builder(this.Session).WithC2AllorsString("c2B").Build();
            var c2C = new C2Builder(this.Session).WithC2AllorsString("c2C").Build();

            var c1a = new C1Builder(this.Session)
                .WithC1AllorsString("c1A")
                .WithC1C2One2Many(c2A)
                .Build();

            var c1b = new C1Builder(this.Session)
                .WithC1AllorsString("c1B")
                .WithC1C2One2Many(c2B)
                .WithC1C2One2Many(c2C)
                .Build();

            this.Session.Derive(true);

            var path = new Fetch(MetaC1.Instance.C1C2One2Manies, MetaC2.Instance.C2AllorsString);

            var aclFactoryMock = AclFactoryMock;

            var result = (ISet<object>)path.Get(c1a, aclFactoryMock.Object);
            Assert.Equal(1, result.Count);
            Assert.True(result.Contains("c2A"));

            result = (ISet<object>)path.Get(c1b, aclFactoryMock.Object);
            Assert.Equal(2, result.Count);
            Assert.True(result.Contains("c2B"));
            Assert.True(result.Contains("c2C"));
        }

        [Fact]
        public void One2ManyWithPropertyNames()
        {
            var c2A = new C2Builder(this.Session).WithC2AllorsString("c2A").Build();
            var c2B = new C2Builder(this.Session).WithC2AllorsString("c2B").Build();
            var c2C = new C2Builder(this.Session).WithC2AllorsString("c2C").Build();

            var c1A = new C1Builder(this.Session)
                .WithC1AllorsString("c1A")
                .WithC1C2One2Many(c2A)
                .Build();

            var c1B = new C1Builder(this.Session)
                .WithC1AllorsString("c1B")
                .WithC1C2One2Many(c2B)
                .WithC1C2One2Many(c2C)
                .Build();

            this.Session.Derive(true);

            Fetch.TryParse(M.C2.ObjectType, "C1WhereC1C2One2Many", out var fetch);

            var aclFactoryMock = AclFactoryMock;

            var result = (C1)fetch.Get(c2A, aclFactoryMock.Object);
            Assert.Equal(result, c1A);

            result = (C1)fetch.Get(c2B, aclFactoryMock.Object);
            Assert.Equal(result, c1B);
        }
    }
}
