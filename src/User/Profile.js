import React,{useState,useEffect} from 'react'
import UserNavbar from './UserNavbar'
import './Profile.css';
import { NavLink,Link } from "react-router-dom"
const Profile = () => {

    const user = JSON.parse(localStorage.getItem('currentUser'));
useEffect(()=>{
if(!user)
window.location.href = '/login'
},[])

  return (
    <div>
        <UserNavbar/>
        <div class="profile-card">
        <div class="profile-card__header">
    
            <h1>{user.name}</h1>
        </div>
        <div class="profile-card__info">
            <p>Email: {user.email}</p>
            <p>isAdmin: {user.isAdmin ? 'Yes' :'No'}</p>
            {user.isAdmin ? (<a className='book-button extra admin-button'><Link to="/Admin" >Admin</Link></a>) :''}
        </div>
    </div>
    </div>
  )
}

export default Profile
