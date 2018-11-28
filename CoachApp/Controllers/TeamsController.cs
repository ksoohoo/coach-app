using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoachApp.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CoachApp.Controllers {
    [Route("api/[controller]")]
    public class TeamsController : Controller {
        // GET: api/teams
        [HttpGet]
        public IEnumerable<Team> Get() {    // TODO: Get from db
            return new Team[] { 
                new Team() { Id = 1, Name = "Owls", SportId = 1 },
                new Team() { Id = 2, Name = "Yellow Jackets", SportId = 1 },
                new Team() { Id = 3, Name = "Engineers", SportId = 1  }
            };
        }
    }
}
