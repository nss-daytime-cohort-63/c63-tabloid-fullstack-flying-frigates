import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import TagList from "./TagList"
import UserProfileList from "./UserProfile";

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
            <Route path="manager" element={isLoggedIn ? <TagList /> : <p>Whoops, nothing here...</p>} />
          </Route>
          <Route path="CategoryManager" element={isLoggedIn ? <CategoryList /> : <Navigate to="/login" />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
<<<<<<< HEAD
          <Route path="userprofiles" element={<UserProfileList/>} />
=======
          <Route path="posts" element={<PostList />} />
          <Route path="posts" element={<PostList />} />
          <Route path="*" element={<p>Whoops, nothing here...</p>} />
>>>>>>> main
        </Route>
      </Routes>
    </main>
  )
}
