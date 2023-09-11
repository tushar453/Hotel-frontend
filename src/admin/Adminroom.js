import React from 'react'
import Adminnav from './Adminnav'
import { useState ,useEffect } from 'react'
import axios from 'axios'
// import { Divider, Space, Tag } from 'antd';
import './Adminbooking.css';
const Adminroom = () => {

    const[rooms , setRooms]  = useState([]);
    useEffect(()=>{
        async function fetchdata(){
       const data = await(await axios.get("https://refr.onrender.com/list")).data
       setRooms(data);
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
                  <th>Maxcount</th>
                  <th>Rentperday</th>
                  <th>Currentbooking</th>
                  <th>Roomtype</th>
                  <th>Roomid</th>
                 
              </tr>
          </thead>

 <tbody>
          {rooms.length && (rooms.map(details=>{
        return    <tr>
                  <td>{details.name}</td>
                  <td>{details.maxcount}</td>
                  <td>{details.rentperday}</td>
                  <td>{details.currentbooking.length}</td>
                  <td>{details.roomtype}</td>
                  <td>{details._id}</td>
                  
              </tr>
          })) }

         
          
             
          </tbody>
      </table>
  </div>
     
     
    </div>
  )
}

export default Adminroom
