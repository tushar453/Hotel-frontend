import React from 'react'
import Adminnav from './Adminnav'
import { useState ,useEffect } from 'react'
import axios from 'axios'
import { Divider, Space, Tag } from 'antd';
import './Adminbooking.css';
const Adminusers = () => {
    const[users , setUsers]  = useState([]);
    useEffect(()=>{
        async function fetchdata(){
       const data = await(await axios.get("https://refr.onrender.com/allusers")).data
       setUsers(data);
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
                  <th>Id</th>
                  
                  <th>createdAt</th>
              </tr>
          </thead>

 <tbody>
          {users.length && (users.map(details=>{
        return    <tr>
                  <td>{details.name}</td>
                  <td>{details.email}</td>
                  <td>{details._id}</td>
                  <td>{details.createdAt}</td>
                  
                
              </tr>
          })) }

         
          
             
          </tbody>
      </table>
  </div>
     
    </div>
  )
}

export default Adminusers
