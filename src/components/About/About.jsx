import React from 'react';
import './about.css';
const About = () => {
  return (
    <div className='about' id='about'>
      <div className='images'>
         <img src='pinklady.jpg' alt='About Image' />
      </div>
      <div className='About__info'>
          <center><h3>About Us</h3></center>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, tempora. Aliquid facere ipsum repudiandae illum sunt ad praesentium quos! Neque at ipsum sit eaque assumenda iure maxime nostrum odit voluptatibus!</p>
          <h5>Prepaid cards and debit cards are both widely accepted at merchants worldwide, but one is preloaded and the other is not. Debit cards are linked to a checking account, while prepaid cards aren't and instead require you to load money onto the card.</h5>
      </div>
      
    </div>
  )
}


export default About