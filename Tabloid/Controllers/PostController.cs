using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Tabloid.Models;
using Tabloid.Repositories;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;

        public PostController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var posts = _postRepository.GetAll();
            return Ok(posts);
        }

        // POST api/<PostController>
        //add method
        [HttpPost]
        public IActionResult Post(Post post)
        {
            _postRepository.Add(post);
            return CreatedAtAction("Get", new { id = post.Id }, post);        
        }


        //    update method
        //    PUT api/<PostController>/5
        //    [HttpPut("{id}")]
        //    public IActionResult Put(int id, [FromBody] string value)
        //    {
        //    }

        //    DELETE api/<PostController>/5
        //    [HttpDelete("{id}")]
        //    public IActionResult Delete(int id)
        //    {
        //    }
        //    */
    }
}
