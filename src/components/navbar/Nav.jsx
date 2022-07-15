import React from 'react';
import './nav.css'
import logo from '../../assets/logo.png';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
//import { RIMenu3Line, RICloseLine} from 'react-icons/ri'

const Nav = () => {
  return (
    <div className='nav'>
      <div className='nav__logo'>
      <Link to="/"><img src={logo} alt='Carde Logo' /></Link> 
        </div>
        <div className='nav__links'>
          <div className='nav__links-left'>
            <p><Link to="/contact">Contact Us</Link></p>
            <p><a href="#">Pricing</a></p>
            <p><a href="#">Help</a></p>
          </div>
             
          <div className='nav__links-right'>
            <p><a href="#about">About</a></p>
            <p><a href="#features">Features</a></p>
            <p><a href="#">Login</a></p>
            <button>Get Started</button>
          </div>
        </div>
    </div>
    
  )
}

export default Nav