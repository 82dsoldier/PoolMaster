using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using PoolMaster.Data.DTOs;
using PoolMaster.Data.Interfaces;
using PoolMaster.Data.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace PoolMaster.Api.Controllers {
	[Route("[controller]")]
	[ApiController]
	[IgnoreAntiforgeryToken]
	[Produces("application/json")]
	public class PlayerController : Controller {
		private readonly IPlayerService _service;
		private readonly IMapper _mapper;
		public PlayerController(IPlayerService service, IMapper mapper) {
			_service = service;
			_mapper = mapper;
		}

		[HttpGet]
		public IEnumerable<PlayerDto> Get() => _mapper.Map<IEnumerable<Player>, IEnumerable<PlayerDto>>(_service.Get());

		[HttpGet("{id}")]
		public PlayerDto Get(ObjectId id) => _mapper.Map<PlayerDto>(_service.Get(id));

		[HttpPost]
		public IActionResult Post(PlayerDto val) {
			_service.Create(_mapper.Map<PlayerDto, Player>(val));
			return Created("https://localhost:44392/player", val);
		}

		[HttpPut]
		public void Put(PlayerDto val) {
			//var json = val.GetRawText();
			//var data = JsonSerializer.Deserialize<Player>(json, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
			var data = _mapper.Map<Player>(val);
			_service.Update(data.Id, data);
		}
	}
}
