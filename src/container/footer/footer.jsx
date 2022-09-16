import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='nav__logo footer__logo'>
          <img src='logo.png' alt='Logo' />
          <h6>We always make our customers happy by bridging the cross border payment gap.</h6>
      </div>
      <div className='useful__links'>
          <div className='links__About'>
             <h5>About</h5>
             <li><a href='#'>About Us</a></li>
             <li><a href='#'>Features</a></li>
             <li><a href='#'>Blog</a></li>
             <li><a href='#'>Newsletter</a></li>
          </div>
          <div className='links__Company'>
          <h5>Company</h5>
             <li><a href='#'>Why Carde</a></li>
             <li><a href='#'>Partner With Us</a></li>
             <li><a href='#'>FAQ</a></li>
             <li><a href='#'>Developers</a></li>
          </div>
          <div className='links__Support'>
          <h5>Support</h5>
             <li><a href='#'>Account</a></li>
             <li><a href='#'>Support Center</a></li>
             <li><a href='#'>Feedback</a></li>
             <li><a href='#'>Contact Us</a></li>
          </div>
      </div>
      <div className='subscribe'>
            <h5>Subscribe to our Newsletter</h5>
            <div className='sub__form'>
           
            </div>

      </div>
    </div>
  )
}

export default Footer