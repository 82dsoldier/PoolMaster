using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using PoolMaster.Data.Interfaces;
using PoolMaster.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PoolMaster.Api.Controllers {
	public class PlayerController : Controller {
		private IPlayerService _service;
		public PlayerController(IPlayerService service) {
			_service = service;
		}

		[HttpGet]
		public IEnumerable<Player> Get() => _service.Get();

		[HttpGet]
		public Player Get(string id) => _service.Get(new ObjectId(id));

		[HttpPost]
		public void Post(Player val) => _service.Create(val);

		[HttpPut]
		public void Put(Player val) => _service.Update(val.Id, val);
	}
}
