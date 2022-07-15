import React from 'react'
import './contact.css'
import {FaComments} from 'react-icons/fa'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className='Cta'>
        <div className='cta__text'>
        <div className='cta__text-icon'> <FaComments /></div>
               <h4>Got Some Enquiries? <br></br>Book a Session on us</h4>
       </div>
        <Link to="/contact"><button>Contact Us</button></Link>
    </div>
  )
}

export default Contact