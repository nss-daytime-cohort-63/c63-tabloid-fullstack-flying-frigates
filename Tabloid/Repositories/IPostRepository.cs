using Microsoft.Extensions.Hosting;
using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IPostRepository
    {
        List<Post> GetAll();
        Post GetPost(int id);
    }
}
