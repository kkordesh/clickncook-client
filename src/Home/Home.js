import React from 'react';
import '../App.css'
import { Button } from './Button';
import './Home.css';
import logo from '../assets/clickncook.png'


const Home = () => {
    return (
        <div className='home-container'>
            <img src={logo} height='275px' width='320px' alt='CNClogo'  />
            <h3 id='homesign'>Finding and storing all  your special recipes</h3>
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline' 
                    buttonSize='btn--large'>
                       Get Started
                </Button>
        </div>
    )
}

export default Home;