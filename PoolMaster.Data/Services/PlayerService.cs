using PoolMaster.Data.Interfaces;
using PoolMaster.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace PoolMaster.Data.Services {
	public class PlayerService : DbServiceBase<Player>, IPlayerService {
		public PlayerService(IDbSettings settings) : base(settings) {
		}
	}
}
