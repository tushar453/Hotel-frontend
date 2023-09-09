import React from 'react'
import './UserNavebar.css';
import { NavLink,Link } from "react-router-dom"

const UserNavbar = () => {
  return (
    <div>
       
      <nav class="user-navbar">
        <div class="user-navbar__container">
         <Link  to="/profile" >   <a href="#" class="user-navbar__button ">Profile</a></Link>
            {/* <Link to={/profile}></Link> */}


            
          <Link to="/userbookings" >  <a href="#" class="extra-8">Bookings</a></Link>
        </div>
    </nav>
    </div>
  )
}

export default UserNavbar
