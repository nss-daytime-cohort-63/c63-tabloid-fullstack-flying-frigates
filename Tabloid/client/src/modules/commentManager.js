const _apiUrl = '/api/comment'

export const getComments = (postId) => {
  return fetch(`${_apiUrl}/${postId}`).then((resp) => resp.json())
}

export const addComment = (postId, comment) => {
  return fetch(`${_apiUrl}/${postId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  })
}

export const updateComment = (commentId, comment) => {
  return fetch(`${_apiUrl}/${commentId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  })
}

export const deleteComment = (commentId) => {
  return fetch(`${_apiUrl}/${commentId}`, {
    method: 'DELETE',
  })
}
