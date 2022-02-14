import React, { useState, useEffect } from "react";
import "./App.css";
import Auth from "./Auth/Auth";
import Navbar from "./Home/Navbar";
import RecipeIndex from "./RecipeIndex/RecipeIndex.jsx";

const App = (props) => {
  const [token, setToken] = useState("");

  //TODO: create a function that will update the state of token / update local storage.

  const updateLocalStorage = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  //TODO: utilize a hook called useEffect to check if we have token on page load - and if we do update the state of token

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  //TODO: create a function that will clear out the token & update the state of token to be empty string and pass it down to the navbar component

  const clearLocalStorage = () => {
    localStorage.clear();
    setToken("");
  };

  return (
    <div className="App">
      <Navbar clearLocalStorage={clearLocalStorage} />

      {token ? (
        <RecipeIndex token={token} />
      ) : (
        <Auth updateLocalStorage={updateLocalStorage} />
      )}
    </div>
  );
};

export default App;
