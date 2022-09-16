import React from 'react'
import './header.css';
import Nav from '../../components/navbar/Nav';

const Header = () => {
  return (
    <><Nav />
    <div className='header'>
       <div className='content'>
        <div className='headerText'>
          <h1>Extending Payment Across  the Borders in Africa</h1>
          <p>Carde is a multi-national payment solution/gateway
          With awesome features and integration to make
         international transaction easier</p>
          <button>Get Started</button>
        </div>
        <div className='headerImage'>
          <img src='headerImage.png' alt="'Header Image" />
        </div>
        </div>
      </div></>
  )
}

export default Header