import React from 'react'
import './cta.css'
import {FaComments} from 'react-icons/fa'
const Cta = () => {
  return (
    <div className='Cta'>
        <div className='cta__text'>
         <div className='cta__text-icon'> <FaComments   /></div>
          <h4>Create an Account Today <br></br>It’s Absolutely Free!!!</h4>
       </div>
        <button>Get Started</button>
    </div>
  )
}

export default Cta