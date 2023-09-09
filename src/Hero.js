import React ,{useState , useEffect} from 'react'
import './Hero.css';
import axios from 'axios';
// import UilUser from '@iconscout/react-unicons/icons/uil-react'
import { UilUser } from '@iconscout/react-unicons'
import { NavLink,Link } from "react-router-dom"
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'axios'
import {FaBars , FaTimes} from "react-icons/fa";
import image from './img/sofa.png';
const Hero = (props) => {

    const [text, setText] = useState('Make Yourself At Home in Our'); // Initial text
    const[data , setData] =  useState("");

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
  return (
    <div class="container-1"   style={{ 
        backgroundImage: `url(${image})`  , backgroundSize:"cover"
      }}>
        
   
    <div class="navbar">
        
        <div class="logo">Rayal <span>Park</span> </div>

        <ul className={click ?"nav-links active":"nav-links"}>

          
            <li class="nav-item"><Link to="/"><a href="#">Home</a></Link></li>

            <li className="nav-item li"><Link to="/room"> <a href='#' className='rooms-a' >Rooms</a></Link> </li>
           
             <li class="nav-item"><a href="#">About Us</a></li>

            <li class="nav-item"><a href="#">Contact Us</a></li>
 
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
<Link to="/user"> <a  class="dropdown-item"   >User</a></Link>
 
  </div>
</div>





            </>) :(<>
            
            <Link to ="/register"><button class="book-button extra-3">BOOK</button></Link>
            </>) }

            



         {/* <div><Link to={/register}><button >Book Now</button></Link></div> */}
           
            
        </ul>

         
        
        <div className="hamburger" onClick={handleclick}>
   { click ? (<FaTimes size= {20} style = {{color:"#000"}}/>) : (<FaBars size= {20} style = {{color:"#000"}}/>) }
</div>
    </div>

    <div class="container">
       
        
        
       
        <div class="image-text"><span> {props.heading}</span> </div>
        
       

    </div>

 </div>
  )
}

export default Hero
