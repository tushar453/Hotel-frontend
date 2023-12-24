import React from 'react'
import './Gallery.css';
import { NavLink,Link } from "react-router-dom"
import Hero from '../Hero'
import All from './All';
const Gallery = () => {
  return (
    <div>
        <Hero heading = "Scroll Down To enjoy Best Gallery"/>
    <div className='gallery-container'>
        <div className="gallery-heading">
            <h1>Gallery.</h1>
            <p>Sochi has a lot to offer for anyone who loves nature, sports, history, sunny beach leisure and active adventures.</p>
        </div>
        <div className='gallery-nav'>
        <ul class="nav">
  <li class="nav-item">
  <Link to="/All"><a class="nav-link active" aria-current="page" href="#">All</a> </Link>
    
  </li>
  <li class="nav-item">
  <Link to="/City"> <a class="nav-link" href="#">City</a> </Link>
   
  </li>
  <li class="nav-item">
  <Link to="/Beach"><a class="nav-link" href="#">Beach</a> </Link>
    
  </li>
  <li class="nav-item">
  <Link to="/Mountain"> <a class="nav-link " >Mountain</a></Link>
    
  </li>
</ul>
        </div>
    </div>
    <All/>
    </div>
    
  )
}

export default Gallery

