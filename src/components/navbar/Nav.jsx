import React from 'react';
import './nav.css'
import logo from '../../assets/logo.png';
//import { RIMenu3Line, RICloseLine} from 'react-icons/ri'

const Nav = () => {
  return (
    <div className='nav section__padding'>
      <div className='nav__logo'>
        <img src={logo} alt='Carde Logo' />
        </div>
        <div className='nav__links'>
          <div className='nav__links-left'>
            <p><a href="#">Developer</a></p>
            <p><a href="#">Pricing</a></p>
            <p><a href="#">Help</a></p>
          </div>
             
          <div className='nav__links-right'>
            <p><a href="#">About</a></p>
            <p><a href="#">Features</a></p>
            <p><a href="#">Login</a></p>
            <button>Get Started</button>
          </div>
        </div>
    </div>
    
  )
}

export default Nav