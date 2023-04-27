import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  // Switch overlay back and forth
  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);

    // If overlay is true, disable scroll, else enable scroll
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

    // Enable scrolling
    document.body.style.overflowY = "auto";
  };

  // If window width bigger that 800px - hide overlay
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
        // If hamburger menu was clicked, set class to close-icon, otherwise empty string
        className={`hamburger-menu ${isOverlayVisible ? "close-icon" : ""} `}
        onClick={toggleOverlay}
      >
        {/* Three line of hamburger menu */}
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
        {/* If overlay was clicked, set class to "visible", otherwise "hidden" */}
        <div className={`overlay ${isOverlayVisible ? "visible" : "hidden"}`}>
          <ul className="header_items">
            <Link to="/" className="header_link" onClick={hideOverlay}>
              <li>Home</li>
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
