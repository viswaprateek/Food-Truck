
// RootLayout.js

import React from 'react';
import { Outlet } from 'react-router-dom';
// import Header from './pages/Header/Header.jsx';
// import Footer from './pages/Footer/Footer.jsx';

function RootLayout() {
  return (
    <div>
      {/* <Header /> */}
      <div style={{ minHeight: '70vh' }}>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default RootLayout;
