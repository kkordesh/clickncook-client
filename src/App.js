import React, { Component } from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Home/Navbar';
import './App.css';
import Home from './Home/Home';
import About from './Home/About';


function App() {
  return (
    <div className='App'>
      <Router>
          <Navbar />
          {/* <Home />
          <About /> */}
      </Router>
    </div>
  );
  };


export default App;
