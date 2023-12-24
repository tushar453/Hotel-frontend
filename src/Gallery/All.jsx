import React from 'react'
import Gallery from './Gallerys'
import {useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import Gallerys from './Gallerys';
import Galnav from './Galnav';
import i1 from '../img/city1.jpg'
import i2 from '../img/city2.jpg'
import i3 from '../img/city3.jpg'
import m5 from '../img/m4.jpg'
import m6 from '../img/m6.jpg'
import m7 from '../img/m7.jpg'
import b1 from '../img/b1.jpg'
import b2 from '../img/b2.jpg'
import b3 from '../img/b3.jpg'
import b4 from '../img/b4.jpg'
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
      <img src={i1} alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade-down"  >
    <div class="card-2-image">
      <img src={m5} alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade-left" >
    <div class="card-2-image">
      <img src={b1} alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade-right"  >
    <div class="card-2-image">
      <img src={m6} alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade" >
    <div class="card-2-image">
      <img src={b3} alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade-left" >
    <div class="card-2-image">
      <img src={m7} alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade-right" >
    <div class="card-2-image">
      <img src={b2} alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade" >
    <div class="card-2-image">
      <img src={i2} alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade" >
    <div class="card-2-image">
      <img src={b3} alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade-up" >
    <div class="card-2-image">
      <img src={b4} alt="Image"/>
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
