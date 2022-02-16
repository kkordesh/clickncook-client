import Logout from "./Logout/Logout";
import "./Navbar.css"
import logo from '../assets/clickncook.png';



const Navbar = (props) => {
    return (
    <div>
     
        <nav>
          
            <Logout  clearLocalStorage={props.clearLocalStorage}/>
        
            
        </nav>
        
    </div>
    );
};

export default Navbar;