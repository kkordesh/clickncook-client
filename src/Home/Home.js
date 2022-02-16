import React from 'react';
import '../App.css'
import { Button } from './Button';
import './Home.css';

const Home = () => {
    return (
        <div className='home-container'>
            <img src="../assets/dilyara-garifullina-5fn1LeWzhX4-unsplash.jpg" />
            <h1>Storage for all  your special recipes</h1>
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