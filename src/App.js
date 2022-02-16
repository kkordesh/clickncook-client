import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Home/Navbar';
import './App.css';
import Home from './Home/Home';
import About from './Home/About';


function App() {

  const [token, setToken] = useState("");
    
  const updateLocalStorage = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
  }
}, []);
const clearLocalStorage = () => {
  localStorage.clear();
  setToken("");
};

  return (
    <div className='App'>
      <Router>
          <Navbar token = {token}/>
          {/* <Home />
          <About /> */}
      </Router>
    </div>
  );
  };


export default App;
