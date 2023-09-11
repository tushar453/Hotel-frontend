import React,{useEffect,useState} from 'react'
import UserNavbar from './UserNavbar'
import Bookingcard from './Bookingcard'
import axios from 'axios'
import './Bookings.css';
const Bookings = () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const[bookings , setbooking] = useState("");
        const[loading , setloading] = useState(false);
    
    useEffect(()=>{
      async function fetchData() {
        setloading(true);
      const data = await(await axios.post('https://refr.onrender.com/getroombyuserid',{userid:user._id})).data
console.log(data);
setloading(false);
setbooking(data)
      }
      fetchData();



    },[])
  return (
    <div>
        <UserNavbar/>
        

        <div className="box-1">
       {bookings && (bookings.map(booking => {
         
         return (
          <div className="box-2">
            <Bookingcard
              
              booking={booking}
            
            />
          </div>
        );




       }) )}
      </div>
    </div>
  )
}

export default Bookings
