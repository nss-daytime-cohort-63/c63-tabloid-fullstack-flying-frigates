using System.Collections.Generic;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Tabloid.Models;
using Tabloid.Utils;

namespace Tabloid.Repositories
{
    public class CategoryRepository : BaseRepository, ICategoryRepository
    {
        public CategoryRepository(IConfiguration config) : base(config) { }
        public List<Category> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, [Name] FROM Category ORDER BY [Name] ASC";
                    
                    var categories = new List<Category>();
                    
                    var reader = cmd.ExecuteReader();
                    
                    while (reader.Read())
                    {
                        categories.Add(NewCategory(reader));
                    }
                    reader.Close();
                        
                    return categories;
                }
            }
        }

        private static Category NewCategory(SqlDataReader reader)
        {
            return new Category()
            {
                Id = DbUtils.GetInt(reader, "Id"),
                Name = DbUtils.GetString(reader, "Name")
            };
        }

        public Category GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, [Name]
                        FROM Category
                        WHERE Id = @id";

                    DbUtils.AddParameter(cmd, "@id", id);
                    
                    Category category = null;
                    
                    var reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        category = new Category()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name")
                        };

                    }
                    reader.Close();
                        
                    return category;
                }
            }
        }
        

        public void Add(Category category)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Category ([Name])
                                        OUTPUT INSERTED.ID
                                        VALUES (@name)";
                    DbUtils.AddParameter(cmd, "@name", category.Name);

                    category.Id = (int)cmd.ExecuteScalar();

                }
            }
        }

        public void Update(Category category)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                    UPDATE Category
                                    SET NAME =@Name
                                    WHERE Id =@id";
                    DbUtils.AddParameter(cmd, "@name", category.Name);
                    DbUtils.AddParameter(cmd, "@id", category.Id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"DELETE Category 
                                        WHERE Id = @id";
                    DbUtils.AddParameter(cmd, "@Id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
