import React from 'react'
import Adminnav from './Adminnav'
import { useState ,useEffect } from 'react';
import axios from 'axios';
const Adminmessages = () => {
    
    const[messages , setMessages]  = useState([]);
    useEffect(()=>{
        async function fetchdata(){
       const data = await(await axios.get("https://refr.onrender.com/allmessages")).data
       setMessages(data);
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
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact No.</th>
                  <th>Messages</th>
                 
                 
              </tr>
          </thead>

 <tbody>
          {messages.length && (messages.map(details=>{
        return    <tr>
                  <td>{details.name}</td>
                  <td>{details.email}</td>
                  <td>{details.roomtype}</td>
                  <td>{details.messages}</td>
                  
                  
              </tr>
          })) }

         
          
             
          </tbody>
      </table>
  </div>
     
    </div>
  )
}

export default Adminmessages
