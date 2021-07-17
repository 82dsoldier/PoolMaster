using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PoolMaster.Api.Controllers {
	[Route("[controller]")]
	public class HomeController : Controller {
		[HttpGet]
		public string Get() => "API Service running";
	}
}
