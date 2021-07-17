using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using PoolMaster.Data.Interfaces;
using PoolMaster.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PoolMaster.Api.Controllers {
	public class ScoreConfigController : Controller {
		private IScoreConfigService _service;
		public ScoreConfigController(IScoreConfigService service) {
			_service = service;
		}

		[HttpGet]
		public IEnumerable<ScoreConfig> Get() => _service.Get();

		[HttpGet]
		public ScoreConfig Get(string id) => _service.Get(new ObjectId(id));

		[HttpPost]
		public void Post(ScoreConfig val) => _service.Create(val);

		[HttpPut]
		public void Put(ScoreConfig val) => _service.Update(val.Id, val);
	}
}
