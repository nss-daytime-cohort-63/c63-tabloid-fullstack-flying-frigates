import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";

export const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from your backend or database
    // You may need to replace this with your own logic to retrieve the posts
    const fetchPosts = async () => {
      try {
        // Assuming you have an API endpoint to fetch posts
        const response = await fetch("/api/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Posts List</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>Author: {post.author}</p>
          <p>Category: {post.category}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
