import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/create-blog`
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>MERN Blog</h1>
      <p>{posts && <>{posts.message}</>}</p>
    </div>
  );
}

export default App;
