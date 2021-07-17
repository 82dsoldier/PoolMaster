using PoolMaster.Data.Interfaces;
using PoolMaster.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace PoolMaster.Data.Services {
	public class TeamService : DbServiceBase<Team>, ITeamService {
		public TeamService(IDbSettings settings) : base(settings) {
		}
	}
}
