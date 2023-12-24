import React from 'react'
// import Gallery from './Gallerys'
import Gallerys from './Gallerys'
import Galnav from './Galnav'
import m1 from '../img/m1.jpg'
import m2 from '../img/m2.jpg'
import m3 from '../img/m3.jpg'
import m4 from '../img/m4.jpg'
import m5 from '../img/m4.jpg'
import m6 from '../img/m6.jpg'
import m7 from '../img/m7.jpg'
import m8 from '../img/m8.jpg'
import m9 from '../img/m9.jpg'
const Mountain = () => {
  return (
    <div>
       <Galnav/>
        <div className="All-container">
      <div class="card-2-container">

    
  <div class="card-2"data-aos="fade-right"  >
    <div class="card-2-image">
      <img src={m1} alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade-down"  >
    <div class="card-2-image">
      <img src={m2} alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade-left" >
    <div class="card-2-image">
      <img src={m3} alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade-right"  >
    <div class="card-2-image">
      <img src={m4} alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade" >
    <div class="card-2-image">
      <img src={m5} alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade-left" >
    <div class="card-2-image">
      <img src={m6} alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade-right" >
    <div class="card-2-image">
      <img src={m7} alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade" >
    <div class="card-2-image">
      <img src={m8} alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade" >
    <div class="card-2-image">
      <img src={m9} alt="Image"/>
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

export default Mountain
