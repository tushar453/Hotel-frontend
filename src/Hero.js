import React ,{useState , useEffect} from 'react'
import './Hero.css';
import axios from 'axios';
// import UilUser from '@iconscout/react-unicons/icons/uil-react'
import { UilUser } from '@iconscout/react-unicons'
import { NavLink,Link } from "react-router-dom"
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'axios'
import {FaBars , FaTimes} from "react-icons/fa";
import image from './img/sea.jpg';
const Hero = (props) => {

    const [text, setText] = useState('Make Yourself At Home in Our'); // Initial text
    const[data , setData] =  useState("");
      const[admin , setAdmin] = useState(false);
    const user = JSON.parse(localStorage.getItem('currentUser'));




  
    // Function to handle arrow click and change text
   

    // const textArray = ["Make Yourself At Home in Our  Hotel", "Text 2", "Text 3"]; // Replace with your desired texts
    // let currentIndex = 0;

    // function changeText(direction) {
    //     currentIndex += direction;
    //     if (currentIndex < 0) {
    //         currentIndex = textArray.length - 1;
    //     } else if (currentIndex >= textArray.length) {
    //         currentIndex = 0;
    //     }

    //     const imageText = document.querySelector(".image-text");
    //     imageText.textContent = textArray[currentIndex];
    // }



    const [click, setClick] = useState(false);
    const handleclick = () =>{
       setClick(!click);   
    } ;
    
//   async function myfunction  () {
// let result  = await fetch('http://127.0.0.1:5000/list' )
// result  = await result.json();
// setData(result);
//  };
// console.log(data);

const logout = ()=>{
  localStorage.removeItem('currentUser');
  window.location.href = '/';
}
useEffect(() => {
  document.getElementById('scrollButton').addEventListener('click', function() {
    // Specify the height you want to scroll to (in pixels)
    const scrollToHeight = 1200; // Adjust this value to your desired scroll height
  
    window.scrollTo({
      top: scrollToHeight,
      behavior: 'smooth'
    });
  });
}, [])

  return (
    <div class="container-1"   style={{ 
        backgroundImage: `url(${image})`  , backgroundSize:"cover",backgroundPosition:"center"
      }}>
        
   
    <div class="navbar">
        
        <div class="logo" data-aos="fade">Rayal <span>Park</span> </div>
   
           <div className={click ?"right-menu active":"right-menu"}>
       
       
        <ul className={click ?"nav-links active":"nav-links"}>

         



            <li className="nav-items li"><Link to="/"> <a href='#' className='rooms-a' >Home</a></Link> </li>
            <li className="nav-items li"><Link to="/Gallery"> <a href='#' className='rooms-a' >Gallery</a></Link> </li>
            <li className="nav-items li"><Link to="/About"> <a href='#' className='rooms-a' >About Us</a></Link> </li>
             

            <li class="nav-items"><a href="#">Contact Us</a></li>
 
            {user ? (<>
              {/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {user.name}
  </button>
  <div class="dropdown-menu  drop" aria-labelledby="dropdownMenuButton">
    <a  class="dropdown-item"   href='#' onClick={logout}>logout</a>
    <a class="dropdown-item" href="#">Another</a>
    <a class="dropdown-item" href="#">Something</a>
  </div>
</div> */}
<div class="btn-group dropleft">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <UilUser color="#ff6600" size="20"/>
   {user.name}
  </button>
  <div class="dropdown-menu">
  <a  class="dropdown-item"   href='#' onClick={logout}>logout</a>
  <Link  class="dropdown-item" to="/userbookings"> User</Link>
 
  </div>
</div>





            </>) :(<>
            
            <Link to ="/register"><button class="book-button extra-3">BOOK</button></Link>
            </>) }

            



         {/* <div><Link to={/register}><button >Book Now</button></Link></div> */}
           
            
        </ul>
     

     <div className='reservation'>
      <h1>reservation</h1>
     </div>
         </div>
        
        <div className="hamburger" onClick={handleclick}>
   { click ? (<FaTimes size= {20} style = {{color:"#000"}}/>) : (<FaBars size= {20} style = {{color:"#000"}}/>) }
</div>
    </div>

    <div class="container">
       <div className='head-text'>
        <h3 data-aos="fade-left">Welcome To RayalPark</h3>
        <h1 data-aos="fade-right">Feeling Cool LiKe Your Favorite Place</h1>
       </div>
        
        
         
        <div class="image-text" ><span data-aos="fade-left"> {props.heading}</span> </div>
        <div className='scroll'><button id="scrollButton">Scroll</button></div>
       

    </div>

 </div>
  )
}

export default Hero
