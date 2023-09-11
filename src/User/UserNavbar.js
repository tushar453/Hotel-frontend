import React from 'react'
import './UserNavebar.css';
import { NavLink,Link } from "react-router-dom"
import Logo from '../Logo';


const UserNavbar = () => {
  return (
    <>
    <div>
      <div className='logo-1'><Logo/></div>
    
       
      <nav class="user-navbar">
        <div class="user-navbar__container">
         <Link  to="/profile" >   <a href="#" class="user-navbar__button ">Profile</a></Link>
            {/* <Link to={/profile}></Link> */}


            
          <Link to="/userbookings" >  <a href="#" class="extra-8">Bookings</a></Link>
        </div>
    </nav>
    </div>
   
    </>
  )
}

export default UserNavbar
