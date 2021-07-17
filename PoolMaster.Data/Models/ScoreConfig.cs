using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using PoolMaster.Data.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace PoolMaster.Data.Models {
	public class ScoreConfig : IDbCollection {
		[BsonId]
		[BsonRepresentation(BsonType.ObjectId)]
		public ObjectId Id { get; set; }
		public int Value { get; set; }
		public int? SkillLevel { get; set; }
		public bool IsDot { get; set; }
	}
}
