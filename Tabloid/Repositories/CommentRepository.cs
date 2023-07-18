using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using Tabloid.Models;
using Tabloid.Utils;

namespace Tabloid.Repositories
{
    public class CommentRepository : BaseRepository, ICommentRepository
    {
        public CommentRepository(IConfiguration configuration) : base(configuration) { }

        public List<Comment> GetCommentsByPostId(int postId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
    SELECT c.Id, c.PostId, c.UserProfileId, c.Subject, c.Content, c.CreateDateTime,
           up.DisplayName
    FROM Comment c
    JOIN UserProfile up ON c.UserProfileId = up.Id
    WHERE c.PostId = @PostId
    ORDER BY c.CreateDateTime DESC";
                    cmd.Parameters.AddWithValue("@PostId", postId);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var comments = new List<Comment>();
                        while (reader.Read())
                        {
                            comments.Add(new Comment()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                PostId = DbUtils.GetInt(reader, "PostId"),
                                UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                                Subject = DbUtils.GetString(reader, "Subject"),
                                Content = DbUtils.GetString(reader, "Content"),
                                CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                                UserProfile = new UserProfile()
                                {
                                    Id = DbUtils.GetInt(reader, "UserProfileId"),
                                    DisplayName = DbUtils.GetString(reader, "DisplayName")
                                }
                            });
                        }

                        return comments;
                    }
                }
            }
        }
    }
}
