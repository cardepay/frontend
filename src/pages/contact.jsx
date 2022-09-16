import React from 'react'
import { Contactform, Nav } from '../components';
import { ContactHeader, Footer } from '../container'
const contact = () => {
  return (
    <div className='contact__page slide-top' style={{marginTop:100}}>
    <Nav/>
    <Contactform />
    <Footer />
    </div>
  )
};

export default contact 
