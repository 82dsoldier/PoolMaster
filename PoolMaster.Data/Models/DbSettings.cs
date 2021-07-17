using PoolMaster.Data.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace PoolMaster.Data.Models {
	public class DbSettings : IDbSettings {
		public string ScoreConfigCollectionName { get; set; }
		public string ConnectionString { get; set; }
		public string DatabaseName { get; set; }
	}
}
