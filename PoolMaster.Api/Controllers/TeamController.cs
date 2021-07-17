using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using PoolMaster.Data.Interfaces;
using PoolMaster.Data.Models;
using PoolMaster.Data.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PoolMaster.Api.Controllers {
	public class TeamController : Controller {
		private ITeamService _service;
		public TeamController(ITeamService service) {
			_service = service;
		}

		[HttpGet]
		public IEnumerable<Team> Get() => _service.Get();

		[HttpGet]
		public Team Get(string id) => _service.Get(new ObjectId(id));

		[HttpPost]
		public void Post(Team val) => _service.Create(val);

		[HttpPut]
		public void Put(Team val) => _service.Update(val.Id, val);
	}
}
