﻿using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using PoolMaster.Data.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace PoolMaster.Data.Models {
	public class Team : IDbCollection {
		[BsonId]
		[BsonRepresentation(BsonType.ObjectId)]
		public ObjectId Id { get; set; }
		public string Name { get; set; }
		public string Number { get; set; }
		public string Captain { get; set; }
		public ICollection<Player> TeamMembers { get; set; }
	}
}
