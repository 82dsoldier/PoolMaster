using AutoMapper;
using MongoDB.Bson;
using PoolMaster.Data.DTOs;
using PoolMaster.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace PoolMaster.Data.MapperProfiles {
	public class PlayerProfile: Profile {
		public PlayerProfile() {
			CreateMap<Player, PlayerDto>()
				.ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id.ToString()));
			CreateMap<PlayerDto, Player>()
				.ForMember(dest => dest.Id, opt => opt.MapFrom(src => string.IsNullOrEmpty(src.Id) ? new ObjectId() : new ObjectId(src.Id)));
		}
	}
}
