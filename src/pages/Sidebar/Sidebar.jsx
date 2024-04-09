// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar () {
  return (
    <div className="sidebar">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Sidebar;
