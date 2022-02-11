//import logo from './logo.svg';
import React, { useState, useEffect } from "react";

import './App.css';
import Auth from './Auth/Auth.jsx';
import Navbar from './Home/Navbar';

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

      
       <Auth updateLocalStorage = {
         updateLocalStorage}/> 

    </div>
  );
};




// function App() {
  // return (
  //   return (
  //     <div className="App">
  //       <Navbar clearLocalStorage={clearLocalStorage} />
  
  //       {token ? (
  //         <PieIndex token={token} />
  //       ) : (
  //         <Auth updateLocalStorage={updateLocalStorage} />
  //       )}
  //     </div>
  //   );
  // };
  
//);
// }

export default App;
