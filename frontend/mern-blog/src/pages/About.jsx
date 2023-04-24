import React, { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://mern-sokolinyy.onrender.com/about"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data && (
        <>
          <h1>{data.title}</h1>
          <h3>{data.description}</h3>
        </>
      )}
    </div>
  );
};

export default About;
