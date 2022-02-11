import React from "react";
import "./logout.css"
//import logoutPic from "../../../assests/logoutPic.jpg"

const Logout = (props) => {
    console.log("Logout component", props);

    return ( 
        <div>
           <img 
 //          src={logoutPic} 
           alt="power-button" 
           id="logout" 
           className="logout" 
           onClick={props.clearLocalStorage} />
        </div>
     );
};
 
export default Logout;