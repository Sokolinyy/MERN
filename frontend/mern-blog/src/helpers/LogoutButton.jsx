import React from "react";
import { useAuth } from "../pages/auth/AuthContext";
import axios from "axios";
import logoutIcon from "../assets/logout.png";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { setAuthenticated } = useAuth();

  const navigate = useNavigate();

  const logout = () => {
    // Удалите токен аутентификации из localStorage
    localStorage.removeItem("token");

    // Удалите заголовок авторизации из экземпляра axios
    delete axios.defaults.headers.common["Authorization"];

    // Установите состояние аутентификации в false
    setAuthenticated(false);

    navigate("/");
  };

  return <img className="avatar" onClick={logout} src={logoutIcon} alt="" />;
};

export default LogoutButton;
