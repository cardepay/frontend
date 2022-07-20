import React from 'react'
import { Contactform } from '../components';
import { ContactHeader, Footer } from '../container'
const contact = () => {
  return (
    <div className='contact__page'>
    <ContactHeader />
    <div className='contact__area'>
          <div className='contact__text'>
{/*             styles can be found in the contact form.css in components */}
              <h3>Don't be a stranger</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti cumque possimus reiciendis? Dolores, voluptate cum quibusdam aperiam ullam ab dolor repudiandae tenetur consectetur error laboriosam architecto ad optio at excepturi!</p>
           </div>
           <Contactform />
        </div>

    <Footer />
    </div>
  )
};

export default contact 
