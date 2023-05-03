import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    imageUrl: "",
  });

  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/register/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        id="username"
        onChange={handleChange}
        value={formData.username}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="text"
        name="email"
        id="email"
        onChange={handleChange}
        value={formData.email}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="text"
        name="password"
        id="password"
        onChange={handleChange}
        value={formData.password}
      />

      <label htmlFor="avatarUrl">Avatar URL:</label>
      <input
        type="text"
        name="avatarUrl"
        id="avatarUrl"
        onChange={handleChange}
        value={formData.avatarUrl}
      />

      <button>Submit</button>
    </form>
  );
};

export default Register;
