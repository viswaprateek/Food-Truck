import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import CSS for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">FoodStop</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/menu">Menu</Link>
      </nav>
    </header>
  );
};

export default Header;
