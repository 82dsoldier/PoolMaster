using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Text;

namespace PoolMaster.Data.Interfaces {
	public interface IDbService<T> {
		List<T> Get();
		T Get(ObjectId id);
		void Create(T val);
		void Create(List<T> val);
		void Update(ObjectId id, T val);
		void Remove(T val);
		void Remove(ObjectId id);
	}
}
