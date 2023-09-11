import React from 'react'
import Adminnav from './Adminnav'
import { useState ,useEffect } from 'react'
import axios from 'axios'
import { Divider, Space, Tag } from 'antd';
import './Adminbooking.css';
const Adminbookings = () => {
    const[bookings , setBookings]  = useState([]);
useEffect(()=>{
    async function fetchdata(){
   const data = await(await axios.get("https://refr.onrender.com/allbookings")).data
   setBookings(data);
    }
    fetchdata();
})


  return (
    <div>
        <Adminnav/>
     
      <div class="table-container">
      <table class="data-table">
          <thead>
              <tr>
                  <th>Room</th>
                  <th>Roomid</th>
                  <th>Check-In</th>
                  <th>Check-Out</th>
                  <th>UserName</th>
                  <th>Status</th>
                  <th>TotalAmount</th>
              </tr>
          </thead>

 <tbody>
          {bookings.length && (bookings.map(details=>{
        return    <tr>
                  <td>{details.room}</td>
                  <td>{details.roomid}</td>
                  <td>{details.fromdate}</td>
                  <td>{details.todate}</td>
                  <td>{details.username}</td>
                  <td>{details.status == 'Confirmed' ? (<Tag color="cyan">CONFIRMED</Tag>): (    <Tag color="red">CANCELLED</Tag>)}</td>
                  <td>{details.totalamount}</td>
              </tr>
          })) }

         
          
             
          </tbody>
      </table>
  </div>
     
     
    

  
    </div>
  )
}

export default Adminbookings
