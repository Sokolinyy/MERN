import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setAuthenticated } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/login/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      setMessage("Successful");
      setAuthenticated(true);
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      console.error(error);
      setMessage();
    }
  };

  return (
    <>
      <p>{message}</p>
      <form onSubmit={handleSubmit} className="form">
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

        <button>Sign In</button>
      </form>
    </>
  );
};

export default Login;
