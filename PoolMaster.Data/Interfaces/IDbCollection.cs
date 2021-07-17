using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Text;

namespace PoolMaster.Data.Interfaces {
	public interface IDbCollection {
		ObjectId Id { get; set; }
	}
}
