import React from 'react';
import './Footer.css'; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} FoodStop. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
