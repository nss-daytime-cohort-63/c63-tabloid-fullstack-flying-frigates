import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPostById, deletePost } from '../modules/postManager'
import { useNavigate, useParams } from 'react-router-dom'


export default function PostDetail() {
  const [post, setPost] = useState({})
  const { id } = useParams()
  const localTabloidUser = localStorage.getItem("tabloid_user")
  const tabloidUserObject = JSON.parse(localTabloidUser)

  const navigate = useNavigate()

  useEffect(() => {
    getPostById(id).then(setPost)
  }, [id])

  const handleViewComments = () => {
    navigate(`/comments/${id}`)
  }

  const handleAddComment = () => {
    navigate(`/comments/add/${id}`)
  }

  if (!post) {
    return null
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deletePost(id)
        .then(() => {
          window.location.href = '/posts';
        })
        .catch((error) => {
          console.error('Error deleting post:', error);
        });
    }
  };

  let isAuthor = false
  if (post.userProfileId === tabloidUserObject.id) {
    isAuthor = true
  }
  else {
    console.log('Didnt work')
  }
  return (
    <div>
      <h2>{post.title}</h2>
      <p>Published on: {new Date(post.publishDateTime).toLocaleDateString()}</p>
      <p>Author: {post.userProfile?.displayName}</p>
      <p>Content: {post.content}</p>

      {isAuthor ? (
        <button onClick={() => handleDelete(post.id)}>Delete Post</button>
      ) : (
        <></>
      )}
      <div>{post.content}</div>
      <button onClick={handleViewComments}>View Comments</button>
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
}
