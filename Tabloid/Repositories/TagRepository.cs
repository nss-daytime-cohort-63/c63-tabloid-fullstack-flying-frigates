using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using Tabloid.Models;
using Tabloid.Utils;

namespace Tabloid.Repositories
{
    public class TagRepository : BaseRepository, ITagRepository
    {
        public TagRepository(IConfiguration configuration) : base(configuration) { }

        public List<Tag> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, [Name] 
                                        FROM Tag
                                        ORDER BY [Name] ASC";

                    var tags = new List<Tag>();

                    var reader = cmd.ExecuteReader();

                    while (reader.Read())
                    {
                        tags.Add(NewTag(reader));
                    }
                    reader.Close();

                    return tags;
                }
            }
        }


        //good practice building more utility functions
        ///Use this idea in larger repositories to avoid repeated code
        private Tag NewTag(SqlDataReader reader)
        {
            return new Tag()
            {
                Id = DbUtils.GetInt(reader, "Id"),
                Name = DbUtils.GetString(reader, "Name")
            };
        }
    }
}
