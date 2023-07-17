import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPostById } from '../modules/postManager'

export default function PostDetail() {
  const [post, setPost] = useState({})
  const { id } = useParams()

  useEffect(() => {
    getPostById(id).then(setPost)
  }, [])

  if (!post) {
    return null
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>Published on: {new Date(post.publishDateTime).toLocaleDateString()}</p>
      <p>Author: {post.userProfile?.displayName}</p>
      <div>{post.content}</div>
    </div>
  )
}
