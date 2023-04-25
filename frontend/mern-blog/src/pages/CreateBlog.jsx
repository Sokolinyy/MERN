import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [blogError, setBlogError] = useState("");

  const [formData, setFormData] = useState({
    imageUrl: "",
    title: "",
    theme: "",
    body: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { imageUrl, title, theme, body } = formData;

    // Check if all required fields are filled in
    if (!imageUrl.includes("/")) {
      setBlogError("Please provide an image URL");
      return;
    }
    if (!title || !theme || !body) {
      setBlogError("Please fill in all required fields.");
    }

    try {
      await axios.post(
        `https://mern-sokolinyy.onrender.com/create-blog`,
        formData
      );
      navigate("/");
    } catch (error) {
      console.error("Error creating blog post:", error);
    }
  };

  return (
    <div className="form-container">
      {blogError && (
        <div className="blog-error">
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" />
          </svg>
          <p>{blogError}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="imageUrl" id="imageUrl">
          Image URL:
        </label>
        <input
          type="text"
          name="imageUrl"
          id="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="theme">Theme :</label>
        <select
          name="theme"
          id="theme"
          value={formData.snippet}
          onChange={handleChange}
        >
          <option value="" disabled selected>
            Choose theme:
          </option>
          <option value="beauty">Beauty</option>
          <option value="lifestyle">Lifestyle</option>
          <option value="travel">Travel</option>
          <option value="food">Food</option>
          <option value="technology">Technology</option>
          <option value="health">Health</option>
        </select>

        <label htmlFor="body">Body:</label>
        <textarea
          name="body"
          id="body"
          value={formData.body}
          onChange={handleChange}
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateBlog;
