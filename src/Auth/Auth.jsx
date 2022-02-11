import React, { useState } from "react";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
//import "../Auth.css";

const Auth = (props) => {
  const [isLoginVisible, setIsLoginVisible] = useState(true);

  function handleToggle(){
      // if(isLoginVisible===true){
      //     setIsLoginVisible(false)
      // } else {
      //     setIsLoginVisible(true);
      // }
      setIsLoginVisible(!isLoginVisible)
  }
  return (
    <div>
      <h1>Welcome to ClicknCook Login and Sign Up</h1>
      {isLoginVisible === true ? (
        <Login updateLocalStorage={props.updateLocalStorage} />
      ) : (
        <Signup updateLocalStorage={props.updateLocalStorage} />
      )}
      <br />
      <button onClick={handleToggle}>Toggle Login/Sign up</button>
    </div>
  );
};

export default Auth;
