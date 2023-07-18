import 'firebase/auth'
import firebase from 'firebase/app'

export const getToken = () => firebase.auth().currentUser.getIdToken()

const apiUrl = '/api/comment'

export const getAllCommentsByPostId = (postId) => {
  return getToken().then((token) => {
    return fetch(`${apiUrl}/${postId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('An unknown error occurred while trying to get comments.')
      }
    })
  })
}
