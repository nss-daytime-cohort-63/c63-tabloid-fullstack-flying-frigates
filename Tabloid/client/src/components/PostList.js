import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllPosts } from '../modules/postManager'

export default function PostList() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getAllPosts().then(setPosts)
  }, [])

  return (
    <div>
      <h1>Posts</h1>
      <Link to="/post/add">Add Post</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
