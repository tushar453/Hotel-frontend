import React from 'react'
import './About.css';
import img from '../img/check.jpg'
import Logo from '../Logo';
const About = () => {
  return (
    <>
    <div className='logo-1'><Logo/></div>
    <div className='About-body'>
        <div class="About-card">
        <div class="About-card-left">
            <img src={img} alt="Image"/> 
            <div class="About-small-card">
                <h3 class="About-small-card-h2">Rayal <span>Park</span> </h3>
                <p>24 HOURS SERVICE</p>
            </div>
        </div>
        <div class="About-card-right">
            <h3>ABOUT US  <span>______</span> </h3>
            <h2>The Best Holidays Are Here</h2>
            <p>No one rejects dislikes, or avoids pleasure itself,because it is pleasure, but because who do not know how to pursue</p>
        </div>
    </div>
    </div></>
  )
}

export default About
