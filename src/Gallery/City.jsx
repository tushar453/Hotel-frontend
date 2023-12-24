import React from 'react'
// import Gallery from './Gallerys'
import Gallerys from './Gallerys'
import Galnav from './Galnav'
import img1 from '../img/city1.jpg'
import img2 from '../img/city2.jpg'
import img3 from '../img/city3.jpg'
import img4 from '../img/city4.jpg'
import img5 from '../img/city5.jpg'
import img6 from '../img/city6.jpg'
import img7 from '../img/city7.jpg'
import img8 from '../img/city8.jpg'
import img9 from '../img/img9.jpg'
const City = () => {
  return (
    <div>
     <Galnav/>
        <div className="All-container">
      <div class="card-2-container">

    
  <div class="card-2"data-aos="fade-right"  >
    <div class="card-2-image">
      <img src={img1} alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade-down"  >
    <div class="card-2-image">
      <img src={img2} alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade-left" >
    <div class="card-2-image">
      <img src={img3} alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade-right"  >
    <div class="card-2-image">
      <img src={img4} alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade" >
    <div class="card-2-image">
      <img src={img5} alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade-left" >
    <div class="card-2-image">
      <img src={img6} alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade-right" >
    <div class="card-2-image">
      <img src={img7} alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade-up" >
    <div class="card-2-image">
      <img src={img8}alt="Image"/>
      <div class="overlay">
        <p class="card-2-text">Your text here</p>
      </div>
    </div>
  </div>

  <div class="card-2" data-aos="fade-left" >
    <div class="card-2-image">
      <img src={img9} alt="Image"/>
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

export default City
