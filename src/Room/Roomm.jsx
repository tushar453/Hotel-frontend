import React from 'react'
import './Roomm.css';
import { useState } from 'react';
import imge from '../img/sofa.png'
import wifi from '../img/wifi.png'
import Modals from '../modal/Modals';
import monitor from '../img/monitor.png'
import { Link } from 'react-router-dom';
import food from '../img/food.png'
import bathroom from '../img/bathroom.png'

const Roomm = ({room ,fromdate,todate}) => {
  const user = JSON.parse(localStorage.getItem('currentUser'));

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };




  return (
   <>
 
     <div class="card">
       
       <div class="upper-section">
           <img src={room.imageurls[0]} alt="Image"/>
           <div class="wifi-icons">
               <img src={wifi} alt="Wi-Fi"/>
               <img src={monitor} alt="Wi-Fi"/>
               <img src={food} alt="Wi-Fi"/>
               <img src={ bathroom} alt="Wi-Fi"/>
           </div>
       </div>

      
       <div class="lower-section">
           <div class="heading">{room.name}</div>
           <div class="subheading">Starting from : {room.rentperday}</div>
           <p class="paragraph">Semi double bed 1 guest room, 3 windows</p>
         
           <div className="buttons">


      {(fromdate && todate && user) &&((<><Link to={`/book/${room._id}/${fromdate}/${todate}`}> <button className='book-button extra'>Book Now</button></Link></>) ) }
         
         

            <button className='book-button extra-2'   onClick={openModal}>Details</button>
           </div>
       </div>

       




{/* modal */}

<div className="App">

    <Modals
     isOpen={modalOpen}
     onClose={closeModal}
     imageSrc={room.imageurls[0]}
     desc = {room.desc}
     numberof = {room.maxcount}
     text="Your text paragraph goes here."
      
    />
    </div>


    
    
   </div>
   
   
   
   
   </>
  )
}

export default Roomm
