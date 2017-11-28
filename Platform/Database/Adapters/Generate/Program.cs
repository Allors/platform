﻿using System;

namespace Allors
{
    using Allors.Development.Repository.Tasks;

    class Program
    {
        static int Main(string[] args)
        {
            switch (args.Length)
            {
                case 0:
                    return Default();
                case 2:
                    return Generate.Execute(args[0], args[1]).ErrorOccured ? 1 : 0;
                default:
                    return 1;
            }
        }

        private static int Default()
        {
            var config = new System.Collections.Generic.Dictionary<string, string>()
                             {
                                { "Templates/adapters.cs.stg", "Domain/Generated" },
                             };

            foreach (var entry in config)
            {
                Console.WriteLine("-> " + entry.Value);
                var log = Generate.Execute(entry.Key, entry.Value);
                if (log.ErrorOccured)
                {
                    return 1;
                }
            }

            return 0;
        }
    }
}