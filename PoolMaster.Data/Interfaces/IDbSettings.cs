using System;
using System.Collections.Generic;
using System.Text;

namespace PoolMaster.Data.Interfaces {
	public interface IDbSettings {
		string ScoreConfigCollectionName { get; set; }
		string ConnectionString { get; set; }
		string DatabaseName { get; set; }
	}
}
