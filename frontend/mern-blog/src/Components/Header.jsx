import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);

    if (!isOverlayVisible) {
      // Disable scrolling when the overlay is visible
      document.body.style.overflowY = "hidden";
    } else {
      // Enable scrolling when the overlay is hidden
      document.body.style.overflowY = "auto";
    }
  };

  const hideOverlay = () => {
    setIsOverlayVisible(false);

    document.body.style.overflowY = "auto";
  };

  const handleResize = () => {
    if (window.innerWidth >= 800) {
      hideOverlay();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      <div
        className={`hamburger-menu ${isOverlayVisible ? "close-icon" : ""} `}
        onClick={toggleOverlay}
      >
        <div className="hamburger-line top-line"></div>
        <div className="hamburger-line middle-line"></div>
        <div className="hamburger-line bottom-line"></div>
      </div>
      <div className="logo-box">
        <Link className="logo" to="/">
          <h1 className="logo">Blog</h1>
        </Link>
        <p>FOR EVERYONE</p>
      </div>

      <nav>
        <div className={`overlay ${isOverlayVisible ? "visible" : "hidden"}`}>
          <ul className="header_items">
            <Link to="/" className="header_link" onClick={hideOverlay}>
              <li>Home</li>
            </Link>
            <Link to="/about" className="header_link" onClick={hideOverlay}>
              <li>About</li>
            </Link>
            <Link
              to="/create-blog"
              className="header_link create"
              onClick={hideOverlay}
            >
              <li>Create New Blog +</li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
