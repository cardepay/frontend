import React from 'react'
import {About, Feature, Cta, Fund, Contact, Transition} from '../components';
import {Footer, Services, Header} from '../container'

const home = () => {
  return (
    <div>
       <Transition />
        <div className='header'>
        <Header />
      </div>
      <Services />
      <Feature />
      <Cta />
      <Fund />
      <div>
        <About />
        <Contact />
        
      </div>
      <div>
        <Footer />
      </div>    
    </div>
  )
}

export default home