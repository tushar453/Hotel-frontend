import React from 'react'
import Gallerys from './Gallerys'
import Galnav from './Galnav'
import b1 from '../img/b1.jpg'
import b2 from '../img/b2.jpg'
import b3 from '../img/b3.jpg'
import b4 from '../img/b4.jpg'
import b5 from '../img/b5.jpg'
const Beach = () => {
  return (
    <div>
       <Galnav/>
        <div className="All-container">
      <div class="card-2-container">

    
  <div class="card-2"data-aos="fade-right"  >
    <div class="card-2-image">
      <img src={b1} alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade-down"  >
    <div class="card-2-image">
      <img src={b2} alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade-left" >
    <div class="card-2-image">
      <img src={b3} alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade-right"  >
    <div class="card-2-image">
      <img src={b4} alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade" >
    <div class="card-2-image">
      <img src={b5} alt="Image"/>
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

export default Beach
