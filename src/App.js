import logo from './logo.svg';
import './App.css';
import RecipeIndex from './RecipeIndex/RecipeIndex';
import React, { useState, useEffect } from "react";
import Auth from './Auth/Auth.jsx';
import Navbar from './Home/Navbar';




  //Code below is for having the recipes only able to display when the user is succesfully logged in
  
  
    /*const protectedViews = () => {
      return (token === localStorage.getItem ('token') ? <RecipeIndex token={token}/>
      : <Auth updateToken={updateToken}/>)
    } */
  
  
  
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
      <Navbar clearLocalStorage = {
        clearLocalStorage}/>

        { token ? (
          <RecipeIndex token={token} />
      
        ) : (
      
       <Auth updateLocalStorage = {
         updateLocalStorage}/> 
  )}
           {/* <Navbar clearToken={clearToken}/>
      {protectedViews()} */}
      

    </div>
  );
};





export default App;
