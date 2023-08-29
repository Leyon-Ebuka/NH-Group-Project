import React, { useState } from 'react';
import '../css/ScrollToTopButton.css'; // Create a CSS file for styling the button (optional)

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls beyond a certain threshold (e.g., 300px)
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    // Scrolls the page to the top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Attach the scroll event listener
  window.addEventListener('scroll', handleScroll);

  return (
    <button
      className={`scroll-to-top-btn ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
    
    </button>
  );
};

export default ScrollToTopButton;
