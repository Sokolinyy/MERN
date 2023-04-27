import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header.jsx";
import "./styles.scss";
import CreateBlog from "./pages/CreateBlog.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import BlogList from "./Components/BlogList.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
