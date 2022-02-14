import logo from "../assets/clickncook.png"
import Logout from "./Logout";
import "./Navbar.css"

const Navbar = (props) => {
    return (
    <div>
        <nav>
            <img src={logo} alt="" id="clickncook" />
            <Logout clearLocalStorage={props.clearLocalStorage}/>
        </nav>
    </div>
    );
};

export default Navbar;