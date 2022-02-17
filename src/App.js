import React, { useState, useEffect } from 'react';


import {BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Home/Navbar';
import './App.css';
import Auth from './Auth/Auth';


  
  
  
  const App = (props) => {
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
    <div className="App">
      <Router>
        { token ? (
          <Navbar clearLocalStorage = {
            clearLocalStorage} token={token}/>
          ) : (
              <Auth updateLocalStorage = {
                updateLocalStorage} token={token}/> 
        )};
      
         </Router>
         </div>
  );
       };
       
      


export default App;
