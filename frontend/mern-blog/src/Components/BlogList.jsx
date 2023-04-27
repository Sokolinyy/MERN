// frontend/src/components/BlogList.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [message, setMessage] = useState("");

  // Async function that fetch data from backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://mern-sokolinyy.onrender.com/create-blog"
        );
        // If there is no blogs, display message from backend "There is no blogs"
        if (response.data.message) {
          setMessage(response.data.message);
          // Else store fetched data in blogs useState
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
      {/* If there is no post display message about it */}
      {message ? (
        <h2 className="no-post-message">{message}</h2>
      ) : (
        // Otherwise map through blogs data, and display it on the page
        blogs.map((blog) => (
          <div key={blog._id} className="blog-list-items">
            <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
            <h2>{blog.title.toUpperCase()}</h2>
            <p className="blog-snippet">{blog.theme.toUpperCase()}</p>
            <div className="blog-content">
              <div className="blog-body">
                <p>
                  {/* If length of character bigger then 37, add three dots */}
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
