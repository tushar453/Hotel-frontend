import React from 'react'
import './Bookingcard.css';
import { Divider, Space, Tag } from 'antd';
import axios from 'axios';
import Swal from 'sweetalert2';
const Bookingcard = ({booking}) => {

async function cancelbookings(bookingid,roomid){
const result  = await(await axios.post("https://refr.onrender.com/cancelbooking" , {bookingid,roomid})).data
console.log(result);
Swal.fire('Congrats' , 'Your booking has been cancelled','success').then(result=>{
  window.location.reload();
})
}



  return (
    <div class="detail-card">
     
      {booking.status !== 'cancelled' && (
         <button class="cancel-button" onClick={()=>{cancelbookings(booking._id , booking.roomid)}}  >Cancel</button>
      )}
   
    <div class="detail-card__content">
        <div class="detail-card__info">
            <h2>Details</h2>
            <ul><li><strong>Username:</strong> {booking.username}</li>
            <li><strong>User ID:</strong>{booking.userid}</li>
                <li><strong>Created At:</strong>{booking.createdAt}</li>
                <li><strong>From Date:</strong>{booking.fromdate}</li>
                <li><strong>Room:</strong>{booking.room}</li>
                <li><strong>Room ID:</strong>{booking.roomid}</li>
                <li><strong>Status:  </strong>{booking.status == 'Confirmed' ? (<Tag color="cyan">CONFIRMED</Tag>): (    <Tag color="red">CANCELLED</Tag>)}</li>
                <li><strong>To Date:</strong>{booking.todate}</li>
                <li><strong>Total Amount:</strong>{booking.totalamount}</li>
                <li><strong>Total Days:</strong>{booking.totaldays}</li>
                <li><strong>Transaction ID:</strong> T98765</li>
                <li><strong>Updated At:</strong>{booking.updatedAt}</li>

                
                
            </ul>
        </div>
    </div>
</div>
  )
}

export default Bookingcard
