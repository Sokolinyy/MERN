import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header.jsx";
import "./styles.scss";
import CreateBlog from "./pages/CreateBlog.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import BlogList from "./Components/BlogList.jsx";
import Blog from "./pages/BlogPage";
import Register from "./pages/auth/Register.jsx";
import Login from "./pages/auth/Login.jsx";
import { AuthProvider } from "./pages/auth/AuthContext";
import axios from "axios";
import UserProfile from "./Components/UserProfile";
import { UserProvider } from "./Context/UserContext";

function setAuthToken(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}

const token = localStorage.getItem("token");
if (token) {
  setAuthToken(token);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/create-blog" element={<CreateBlog />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<UserProfile />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>
);
