// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import your components for different pages
// import RootLayout from './RootLayout.js';
// import ErrorPage from './ErrorPage.js'
import Home from './pages/HomePage/Home.jsx';
import SignupPage from './pages/SignupPage/SignupPage.jsx';
import SigninPage from './pages/SigninPage/SigninPage.jsx';
// import RootLayout from './RootLayout.jsx';
// import MenuPage from './pages/MenuPage/MenuPage';
// import BillingPage from './pages/BillingPage/BillingPage';

function App() {
  // const browserRouter=createBrowserRouter([{
  //   path:'',
  //   // element:<RootLayout />,
  //   errorElement:<ErrorPage />,
  //   children:[
  //     {
  //       path:'',
  //       element:<HomePage />
  //     }
  //   ]
  // }])
  return (
    
    // <div>
    //   <RouterProvider router={browserRouter} />
    // </div>
    <Router>
    <div className="App">
      <Routes>
      {/* <Route element={<RootLayout />}> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/signin" element={<SigninPage />} />

        {/* </Route> */}
      </Routes>
    </div>
  </Router>
  
  );
}

export default App;