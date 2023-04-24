// frontend/src/components/BlogList.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/create-blog");
        if (response.data.message) {
          setMessage(response.data.message);
        } else {
          setBlogs(response.data);
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-list">
      {message ? (
        <h2 className="no-post-message">{message}</h2>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id} className="blog-list-items">
            <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
            <h2>{blog.title.toUpperCase()}</h2>
            <p className="blog-snippet">{blog.theme}</p>
            <div className="blog-content">
              <div className="blog-body">
                <p>
                  {blog.body.length > 37
                    ? blog.body.substring(0, 27) + "..."
                    : blog.body}
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
