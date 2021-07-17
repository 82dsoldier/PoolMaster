using MongoDB.Bson;
using MongoDB.Driver;
using PoolMaster.Data.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace PoolMaster.Data.Services {
	public class DbServiceBase<T>
		where T : IDbCollection {
		protected readonly IMongoCollection<T> _collection;

		public DbServiceBase(IDbSettings settings) {
			var client = new MongoClient(settings.ConnectionString);
			var db = client.GetDatabase(settings.DatabaseName);
			_collection = db.GetCollection<T>(typeof(T).Name);
		}

		public List<T> Get() => _collection.Find(c => true).ToList();
		public T Get(ObjectId id) => _collection.Find<T>(c => c.Id == id).FirstOrDefault();
		public void Create(T val) => _collection.InsertOne(val);
		public void Create(List<T> val) => _collection.InsertMany(val);
		public void Update(ObjectId id, T val) => _collection.ReplaceOne(c => c.Id == id, val);
		public void Remove(T val) => _collection.DeleteOne(c => c.Id == val.Id);
		public void Remove(ObjectId id) => _collection.DeleteOne(c => c.Id == id);
	}
}
