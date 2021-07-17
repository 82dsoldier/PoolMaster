using PoolMaster.Data.Interfaces;
using PoolMaster.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace PoolMaster.Data.Services {
	public class ScoreConfigService : DbServiceBase<ScoreConfig>, IScoreConfigService {
		public ScoreConfigService(IDbSettings settings) : base(settings) {
		}
	}
}
