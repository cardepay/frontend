import React from 'react'
import './contact.css'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className='Cta'>
        <div className='cta__text'>
          <i></i>
               <h4>Got Some Enquiries? <br></br>Book a Session on us</h4>
       </div>
        <Link to="/contact"><button>Contact Us</button></Link>
    </div>
  )
}

export default Contact