import React from 'react'
import {About, Feature, Cta, Fund, Contact} from '../components';
import {Footer, Services, Header} from '../container'

const home = () => {
  return (
    <div className='slide-top' style={{marginTop:100}}>
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