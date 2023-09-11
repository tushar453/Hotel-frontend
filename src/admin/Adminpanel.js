import React, { useEffect } from 'react'
import Adminnav from './Adminnav'
import Adminbookings from './Adminbookings'
import Logo from '../Logo'
const Adminpanel = () => {

  useEffect(()=>{
    if(!JSON.parse(localStorage.getItem("currentUser")).isAdmin){
      window.location.href = '/'
    }
  })
  return (
    <div>

      
      <Adminbookings/>
    </div>
  )
}

export default Adminpanel

