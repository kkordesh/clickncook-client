import React from "react";
import logoutPic from '../../assets/logoutPic.jpg';
//import logoutPic from "../../../assests/logoutPic.jpg"

const Logout = (props) => {
    console.log("Logout component", props);

    return ( 
        <div>
           <img 
           src={logoutPic} 
           alt="Logout" 
           id="logout" 
           className="logout" 
           onClick={props.clearLocalStorage}
           style={{width: "100px"}} />
           <h6>Logout</h6>
        </div>
     );
};
 
export default Logout;