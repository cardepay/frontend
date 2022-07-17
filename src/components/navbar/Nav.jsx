import React, {useState} from 'react';
import './nav.css'
import logo from '../../assets/logo.png';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'

const Menu = () =>(
  <><div className='nav__links-left'>
    <p><Link to="/contact">Contact Us</Link></p>
    <p><a href="#">Pricing</a></p>
    <p><a href="#">Help</a></p>
  </div><div className='nav__links-right'>
      <p><a href="#about">About</a></p>
      <p><a href="#features">Features</a></p>
      <p><Link to="/signin">Login</Link></p>
      <button><Link to="/signup">Get Started</Link></button>
    </div></>
)
const Nav = () => {
 
  const[toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='nav'>
      <div className='nav__logo'>
      <Link to="/"><img src={logo} alt='Carde Logo' /></Link> 
        </div>
        <div className='nav__links'>
            <Menu />
          
        </div>
        <div className='nav__mobile-menu '>
              {toggleMenu
                ?<RiCloseLine color='black' size={27} onClick={()=> setToggleMenu(false)}/>
                :<RiMenu3Line color='black' size={27} onClick={()=> setToggleMenu(true)}/>
              }
              {toggleMenu &&(
                <div className='nav__mobile-menu__container slide-top'>
                    <div className='nav__mobile-menu__container-links'></div>
                        <Menu />
                    </div>
              )}
          </div>
    </div>
    
  )
}

export default Nav