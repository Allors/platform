// --------------------------------------------------------------------------------------------------------------------
// <copyright file="Profile.cs" company="Allors bvba">
//   Copyright 2002-2012 Allors bvba.
// 
// Dual Licensed under
//   a) the Lesser General Public Licence v3 (LGPL)
//   b) the Allors License
// 
// The LGPL License is included in the file lgpl.txt.
// The Allors License is an addendum to your contract.
// 
// Allors Platform is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// For more information visit http://www.allors.com/legal
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace Allors.Adapters
{
    using System;
    using System.Collections.Generic;

    using Allors;
    using Allors.Domain;
    using Allors.Meta;

    public abstract class Profile : IProfile
    {
        private readonly ObjectFactory objectFactory;

        protected Profile() => this.objectFactory = this.CreateObjectFactory(MetaPopulation.Instance);

        public IObjectFactory ObjectFactory => this.objectFactory;

        public ISession Session { get; private set; }

        public IDatabase Database { get; private set; }

        public abstract Action[] Markers { get; }

        public virtual Action[] Inits
        {
            get
            {
                var inits = new List<Action> { this.Init };

                if (Settings.ExtraInits)
                {
                    inits.Add(this.Init);
                }

                return inits.ToArray();
            }
        }

        public void SwitchDatabase()
        {
            this.Session.Rollback();
            this.Database = this.CreateDatabase();
            this.Session = this.Database.CreateSession();
            this.Session.Commit();
        }

        public virtual void Dispose()
        {
            this.Session?.Rollback();

            this.Session = null;
            this.Database = null;
        }

        public abstract IDatabase CreatePopulation();

        public abstract IDatabase CreateDatabase();

        internal ISession CreateSession() => this.Database.CreateSession();

        protected internal void Init()
        {
            try
            {
                this.Session?.Rollback();

                this.Database = this.CreateDatabase();
                this.Database.Init();
                this.Session = this.Database.CreateSession();
                this.Session.Commit();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
                throw;
            }
        }

        protected ObjectFactory CreateObjectFactory(IMetaPopulation metaPopulation) => new ObjectFactory(metaPopulation, typeof(C1));
    }
}
