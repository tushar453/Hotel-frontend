import React from 'react'
import './Adminnav.css';
import { NavLink,Link } from "react-router-dom"
import Logo from '../Logo';
const Adminnav = () => {
  return (
   <>
         <div className='logo-1'><Logo/></div>
 <div className='Admin-navbar'>
     <h1>Admin Panel</h1>
    <ul class="nav nav-underline">
  <li class="nav-item admin-links ">
    <Link to="/Adminbook"> <a class="nav-link " aria-current="page" >Bookings</a></Link>
   
  </li>
  <li class="nav-item admin-links">
  <Link to="/Adminusers"> <a class="nav-link " aria-current="page" >Users</a></Link>
    
  </li>
  <li class="nav-item  admin-links">
  <Link to="/Addroom"> <a class="nav-link " aria-current="page" >Add Rooms</a></Link>
    
  </li>
  <li class="nav-item admin-links">
  <Link to="/Adminroom"> <a class="nav-link " aria-current="page" >Rooms</a></Link>

  </li>
  <li class="nav-item admin-links">
  <Link to="/Adminmessages"> <a class="nav-link " aria-current="page" >Messages</a></Link>

  </li>
</ul></div></>
  )
}

export default Adminnav
