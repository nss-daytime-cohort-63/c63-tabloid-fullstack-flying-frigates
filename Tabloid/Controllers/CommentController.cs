using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tabloid.Repositories;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _commentRepository;

        public CommentController(ICommentRepository commentRepository)
        {
            _commentRepository = commentRepository;
        }

        [HttpGet("{postId}")]
        public IActionResult GetCommentsByPostId(int postId)
        {
            var comments = _commentRepository.GetCommentsByPostId(postId);
            return Ok(comments);
        }
    }
}
