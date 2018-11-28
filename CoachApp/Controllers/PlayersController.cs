using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CoachApp.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CoachApp.Controllers {
    [Route("api/[controller]")]
    public class PlayersController : Controller {
        
        // GET api/<controller>/5
        [HttpGet("{teamId}")]
        public IEnumerable<Player> Get(int teamId) {     // TODO: Query database
            if (teamId == 1) {
                return new Player[] { 
                    new Player() { Id = 1, FirstName = "Joe", LastName = "Smith" },
                    new Player() { Id = 2, FirstName = "Matt", LastName = "Robins" }
                };
            } else if (teamId == 2) {
                return new Player[] { 
                    new Player() { Id = 3, FirstName = "Brittany", LastName = "Lee" },
                    new Player() { Id = 4, FirstName = "Karen", LastName = "Chavez" },
                    new Player() { Id = 5, FirstName = "Erin", LastName = "Banks" }
                };
            } else {
                return new Player[] { 
                    new Player() { Id = 6, FirstName = "Christina", LastName = "Weeks" },
                    new Player() { Id = 7, FirstName = "Emily", LastName = "Shin" },
                    new Player() { Id = 8, FirstName = "Beth", LastName = "Burrel" }
                };
            }
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value) {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value) {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id) {
        }
    }
}
