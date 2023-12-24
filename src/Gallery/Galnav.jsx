import React from 'react'


import './Gallery.css';
import { NavLink,Link } from "react-router-dom"
import Hero from '../Hero'
import All from './All';
import Logo from '../Logo';
const Galnav = () => {
  return (<>
  <Hero heading = "Scroll Down to Enjoy Best Gallery"/>
<Logo/>
    <div className='gallery-container'>
    <div className="gallery-heading">
        <h1>Gallery.</h1>
        <p>Sochi has a lot to offer for anyone who loves nature, sports, history, sunny beach leisure and active adventures.</p>
    </div>
<div className="gallery-nav">
<ul class="nav-links-2">
  
   
      <li>  <Link to="/All"><a >All</a> </Link></li>
      <li>  <Link to="/Mountain"><a >Mountain</a> </Link></li>
      <li>  <Link to="/Beach"><a >Beach</a> </Link></li>
      <li>  <Link to="/City"><a >City</a> </Link></li>
      
    </ul>
</div>


   </div>
    </>
  )
}

export default Galnav
