import React from 'react'
import Gallery from './Gallerys'
import {useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import Gallerys from './Gallerys';
import Galnav from './Galnav';

const All = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div>
        <Galnav/>
   <div className="All-container">
      <div class="card-2-container">

    
  <div class="card-2"data-aos="fade-right"  >
    <div class="card-2-image">
      <img src="your-image-url.jpg" alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade-down"  >
    <div class="card-2-image">
      <img src="your-image-url.jpg" alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade-left" >
    <div class="card-2-image">
      <img src="your-image-url.jpg" alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade-right"  >
    <div class="card-2-image">
      <img src="your-image-url.jpg" alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade" >
    <div class="card-2-image">
      <img src="your-image-url.jpg" alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade-left" >
    <div class="card-2-image">
      <img src="your-image-url.jpg" alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade-right" >
    <div class="card-2-image">
      <img src="your-image-url.jpg" alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade" >
    <div class="card-2-image">
      <img src="your-image-url.jpg" alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade" >
    <div class="card-2-image">
      <img src="your-image-url.jpg" alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade-up" >
    <div class="card-2-image">
      <img src="your-image-url.jpg" alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>
</div>
   </div>
    </div>
  )
}

export default All
