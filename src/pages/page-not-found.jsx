import React from 'react'
import { Link } from "react-router-dom";
import notfound from '../assets/404.png';

const PageNotFound = () => {
  return (
    <div className='error'>
      <div className='notfound'>
      <img src={notfound} />
      <h6>
        Hello Carder, We are happy to have you here, however, 
        this page is not active, but Yippy, you can go back <br/> <br /><Link to="/">HOME</Link>
        <br /> <Link to="/signin">Login Here</Link> <br /><Link to="signup">Register Here</Link>
      </h6>
      </div>
    </div>
  )
}

export default PageNotFound