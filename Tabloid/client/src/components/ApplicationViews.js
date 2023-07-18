import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Hello from './Hello'
import TagList from './TagList'
import UserProfileList from './UserProfile'
import PostList from './PostList'
import CategoryList from './CategoryList'
import CategoryAddForm from './CategoryAddForm'
import PostDetail from './PostDetail'
import Comments from './Comments'

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Routes>
        <Route path="/">
          <Route
            index
            element={isLoggedIn ? <Hello /> : <Navigate to="/login" />}
          />
          <Route path="tag">
            <Route
              path="manager"
              element={isLoggedIn ? <TagList /> : <Navigate to="/login" />}
            />
          </Route>
          <Route path="category">
            <Route
              path="manager"
              element={isLoggedIn ? <CategoryList /> : <Navigate to="/login" />}
            />
            <Route
              path="add"
              element={
                isLoggedIn ? <CategoryAddForm /> : <Navigate to="/login" />
              }
            />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route path="userprofiles" element={<UserProfileList />} />
          <Route path="posts" element={<PostList />} />
          <Route
            path="posts/:id"
            element={isLoggedIn ? <PostDetail /> : <Navigate to="/login" />}
          />
          <Route
            path="/comments/:id"
            element={isLoggedIn ? <Comments /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Route>
      </Routes>
    </main>
  )
}
