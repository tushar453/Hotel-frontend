import React from 'react'
import { useState } from 'react';
import Adminnav from './Adminnav'
import './Addroom.css';
import axios from 'axios';
import Swal from 'sweetalert2'
const Addroom = () => {
    const[name , setname] = useState("");
    const[maxcount , setmaxcount] = useState("");
    const[phonenumber , setphonenumber] = useState("");
    const[rentperday , setrentperday] = useState("");
    const[roomtype , setroomtype] = useState("");
    const[desc , setdesc] = useState("");
    const[imageurls , setimageurls] = useState("");
    

    async function submitdet(e){
        e.preventDefault();
        // console.log(name , maxcount,phonenumber,rentperday,roomtype,desc,imageurls);
        const newroom = {
            name , maxcount,phonenumber,rentperday,roomtype,desc,imageurls
        }

        console.log(newroom);
        await axios.post('https://refr.onrender.com/create' ,newroom).then((res)=>{
    const da  =  res.data;
     console.log(da);    })

     Swal.fire('Congrats' , 'Your room has been added','success').then(result=>{
        window.location.reload();
      })


    }
  return (

    
    <div>
        <Adminnav/>
        <div className='body-2'>
        <div class="container-8">
      <h1 class="form-title-8">Add Room</h1>
      <form action="#" className='formadd'>
        <div class="main-user-info-8">
          <div class="user-input-box-8">
         
            <input type="text"
                    id="fullName"
                    name="fullName"
                    value={name}
                    placeholder="Name"
          onChange={(e)=>{setname(e.target.value)}}          
                    
                    />
          </div>
          <div class="user-input-box-8">
           
            <input type="text"
            value={rentperday}
                    id="username"
                    name="username"
                    placeholder="Rentperday"
                    onChange={(e)=>{setrentperday(e.target.value)}}  
                    
                    />
          </div>
          <div class="user-input-box-8">
        
            <input type="text"
            value={maxcount}
                    id="email"
                    name="email"
                    placeholder="Maxcount"
                    onChange={(e)=>{setmaxcount(e.target.value)}}  
                    
                    />
          </div>
          <div class="user-input-box-8">
           
            <input type="text"
            value={desc}
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="description"
                    onChange={(e)=>{setdesc(e.target.value)}}  
                    
                    />
          </div>
          <div class="user-input-box-8">
          
            <input type="text"
            value={phonenumber}
                    id="password"
                    name="password"
                    placeholder="phonenumber"
                    onChange={(e)=>{setphonenumber(e.target.value)}}  
                    
                    />
          </div>
          <div class="user-input-box-8">
           
            <input type="text"
            value={roomtype}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="type"
                    onChange={(e)=>{setroomtype(e.target.value)}}  
                    />
          </div>

          <div class="user-input-box-8">
          
            <input type="text"
            value={imageurls}
                    id="password"
                    name="password"
                    placeholder="Image URL"
                    onChange={(e)=>{setimageurls(e.target.value)}}  
                    />
          </div>


       
        </div>
       
        <div class="form-submit-btn-8">
          <button onClick={submitdet}>Submit</button>
        </div>
      </form>
    </div>
    </div></div>
  )
}

export default Addroom
