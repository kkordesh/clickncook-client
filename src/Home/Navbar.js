import React, { Component } from 'react';
import { Router, Routes, Route, Link } from 'react-router-dom';
// import { MenuItems } from "./MenuItems";
import { Button } from "./Button";
import './Navbar.css';
import logo from '../assets/clickncook.png';
import Home from './Home';
import RecipeIndex from '../RecipeIndex/RecipeIndex';
import About from './about';
import Logout from './Logout/Logout';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <div>
            <nav className='NavbarItems'>

                <img src={logo} height='75px' width='100px'  />
                <h1 className="navbar-logo">ClickNCook<i className='fab logo'></i></h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {/* {MenuItems.map((item, index) => { */}
                        {/* return ( */}
                            <li id='homelink' ><Link to='/'>Home</Link></li>
                            <li id='recipelink'><Link to='/recipeindex'>Recipe Index</Link></li>
                            <li id='aboutlink'><Link to='/about'>About</Link></li>
                            <Logout clearLocalStorage={this.props.clearLocalStorage} />                            {/* <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li> */}
                            {/* ) */}
                    {/* })} */}
                </ul>
                
                
            </nav>
            
                <div className='NavbarRoute'>
                    <Routes>
                        <Route exact path='/' element={<Home/>} />
                        <Route exact path='/recipeindex' element={<RecipeIndex token={this.props.token}/>} />
                        <Route exact path='/about' element={<About/>}/>
                    </Routes>
                </div>
                            </div>
        )
    }
}

export default Navbar;