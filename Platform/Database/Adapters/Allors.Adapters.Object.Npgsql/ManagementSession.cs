// --------------------------------------------------------------------------------------------------------------------
// <copyright file="ManagementSession.cs" company="Allors bvba">
//   Copyright 2002-2012 Allors bvba.
// Dual Licensed under
//   a) the Lesser General Public Licence v3 (LGPL)
//   b) the Allors License
// The LGPL License is included in the file lgpl.txt.
// The Allors License is an addendum to your contract.
// Allors Platform is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// For more information visit http://www.allors.com/legal
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace Allors.Adapters.Database.Npgsql
{
    using System;
    using System.Data.Common;

    using Allors.Adapters.Database.Npgsql.Commands.Procedure;
    using Allors.Adapters.Database.Npgsql.Commands.Text;
    using Allors.Adapters.Database.Sql;

    using global::Npgsql;

    public class ManagementSession : IDisposable, ICommandFactory
    {
        private readonly Database database;

        private NpgsqlTransaction transaction;
        private NpgsqlConnection connection;
       
        private LoadObjectsFactory loadObjectsFactory;
        private LoadCompositeRelationsFactory loadCompositeRelationsFactory;
        private LoadUnitRelationsFactory loadUnitRelationsFactory;

        public ManagementSession(Database database)
        {
            this.database = database;
        }
        
        ~ManagementSession()
        {
            this.Dispose();
        }

        public void Dispose()
        {
            this.Rollback();
        }

        public LoadObjectsFactory LoadObjectsFactory
        {
            get
            {
                return this.loadObjectsFactory ?? (this.loadObjectsFactory = new LoadObjectsFactory(this));
            }
        }

        public LoadCompositeRelationsFactory LoadCompositeRelationsFactory
        {
            get
            {
                return this.loadCompositeRelationsFactory ?? (this.loadCompositeRelationsFactory = new LoadCompositeRelationsFactory(this));
            }
        }

        public LoadUnitRelationsFactory LoadUnitRelationsFactory
        {
            get
            {
                return this.loadUnitRelationsFactory ?? (this.loadUnitRelationsFactory = new LoadUnitRelationsFactory(this));
            }
        }

        public Database Database
        {
            get
            {
                return this.database;
            }
        }

        public Database NpgsqlDatabase
        {
            get
            {
                return this.database;
            }
        }

        public void ExecuteSql(string sql)
        {
            this.LazyConnect();
            using (DbCommand command = this.CreateNpgsqlCommand(sql))
            {
                try
                {
                    command.ExecuteNonQuery();
                }
                catch (Exception e)
                {
                    Console.Error.WriteLine(e.Message + "\n-----" + sql + "\n-----");
                    throw;
                }
            }
        }

        public Sql.Command CreateCommand(string commandText)
        {
            return new Command(this, commandText);
        }

        public NpgsqlCommand CreateNpgsqlCommand(string sql)
        {
            this.LazyConnect();
            var command = this.connection.CreateCommand();
            command.Transaction = this.transaction;
            command.CommandTimeout = this.Database.CommandTimeout;
            command.CommandText = sql;
            return command;
        }

        public void Commit()
        {
            try
            {
                if (this.transaction != null)
                {
                    this.transaction.Commit();
                }
            }
            finally
            {
                this.LazyDisconnect();
            }
        }

        public void Rollback()
        {
            try
            {
                if (this.transaction != null)
                {
                    this.transaction.Rollback();
                }
            }
            finally
            {
                this.LazyDisconnect();
            }
        }

        private void LazyConnect()
        {
            if (this.connection == null)
            {
                this.connection = new NpgsqlConnection(this.Database.ConnectionString);
                this.connection.Open();
                this.transaction = this.connection.BeginTransaction();
            }
        }

        private void LazyDisconnect()
        {
            try
            {
                if (this.connection != null)
                {
                    this.connection.Close();
                }
            }
            finally
            {
                this.connection = null;
                this.transaction = null;
            }
        }
    }
}