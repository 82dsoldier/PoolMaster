using PoolMaster.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace PoolMaster.Data.DTOs {
	public class TeamDto {
		public string Id { get; set; }
		public string Name { get; set; }
		public string Number { get; set; }
		public string Captain { get; set; }
		public ICollection<Player> TeamMembers { get; set; }
	}
}
