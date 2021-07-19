using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using PoolMaster.Data.DTOs;
using PoolMaster.Data.Interfaces;
using PoolMaster.Data.Models;
using PoolMaster.Data.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PoolMaster.Api.Controllers {
	[Route("[controller]")]
	public class TeamController : Controller {
		private readonly ITeamService _service;
		private readonly IMapper _mapper;
		public TeamController(ITeamService service, IMapper mapper) {
			_service = service;
			_mapper = mapper;
		}

		[HttpGet]
		public IEnumerable<TeamDto> Get() => _mapper.Map<IEnumerable<Team>, IEnumerable<TeamDto>>(_service.Get());

		[HttpGet]
		public Team Get(string id) => _service.Get(new ObjectId(id));

		[HttpPost]
		public void Post(TeamDto val) => _service.Create(_mapper.Map<Team>(val));

		[HttpPut]
		public void Put(TeamDto val) {
			var data = _mapper.Map<Team>(val);
			_service.Update(data.Id, data);
		}
	}
}
