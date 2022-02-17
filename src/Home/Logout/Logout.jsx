import React from "react";
import logoutPic from '../../assets/logoutPic.jpg';
import { Link } from "react-router-dom";
//import logoutPic from "../../../assests/logoutPic.jpg"

const Logout = (props) => {
    console.log("Logout component", props);

    return ( 
        <div>
           <Link to='/'>
           <button 
           src={logoutPic} 
           alt="Logout" 
           id="logout" 
           className="logout" 
           onClick={props.clearLocalStorage}
           style={{width: "100px"}}>Logout</button></Link>
           
        </div>
     );
};
 
export default Logout;