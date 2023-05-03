import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <>
          <h1>{user.username}</h1>
          {user.avatarUrl ? (
            <img src={user.avatarUrl} alt={`${user.username}'s avatar`} />
          ) : (
            <p>No avatar</p>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
