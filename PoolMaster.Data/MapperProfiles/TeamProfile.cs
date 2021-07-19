using AutoMapper;
using MongoDB.Bson;
using PoolMaster.Data.DTOs;
using PoolMaster.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace PoolMaster.Data.MapperProfiles {
	public class TeamProfile: Profile {
		public TeamProfile() {
			CreateMap<Team, TeamDto>()
				.ForMember(dest => dest.Id, obj => obj.MapFrom(src => src.Id.ToString()));
			CreateMap<TeamDto, Team>()
				.ForMember(dest => dest.Id, obj => obj.MapFrom(src => string.IsNullOrEmpty(src.Id) ? new ObjectId() : new ObjectId(src.Id)));
		}
	}
}
