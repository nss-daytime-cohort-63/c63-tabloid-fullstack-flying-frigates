using Microsoft.Extensions.Configuration;

using System.Collections.Generic;
using Tabloid.Models;
using Tabloid.Utils;

namespace Tabloid.Repositories
{
    public class CategoryRepository : BaseRepository, ICategoryRepository
    {
        private readonly IConfiguration _config;

        public CategoryRepository(IConfiguration config) : base(config)
        {
            _config = config;
        }
        public List<Category> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, Name FROM Category ORDER BY Name ASC";
                    using (var reader = cmd.ExecuteReader())
                    {
                        var categories = new List<Category>();
                        while (reader.Read())
                        {
                            categories.Add(new Category()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Name = DbUtils.GetString(reader, "Name")
                            });
                        }
                        return categories;
                    }
                }
            }
        }

        public Category GetById(int id)
        { return null; }

        public void Add(Category category)
        { }

        public void Update(Category category)
        { }

        public void Delete(int id)
        { }

    }
}
