import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Blog = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `https://mern-sokolinyy.onrender.com/blog/${id}`
        );
        setBlog(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <div>
      {blog ? (
        <div className="blog-page">
          <img src={blog.imageUrl} className="image" alt="" />
          <h2>{blog.title.toUpperCase()}</h2>
          <p className="blog-theme">{blog.theme.toUpperCase()}</p>
          <div className="blog-content">
            <p className="blog-body">{blog.body}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Blog;
