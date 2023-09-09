import React ,{useState , useEffect} from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import './Booking.css';
import Success from '../component/Success';
import Loader from '../component/Loader';
import {ReactComponent as TestSvg} from "../img/marsh.svg";
import moment from 'moment';
import StripeCheckout from 'react-stripe-checkout';
import swal from 'sweetalert2'
const Bookingscreen = ({match}) => {

    const[loading , setloading] = useState("");
const[error , setError] = useState("");
const[datas ,setdatas] = useState("");
const[room , setRoom] = useState([]); 
const[loadingg , setloadingg] = useState(false);
const {roomid} = useParams();
const {fromdate} = useParams();
const {todate} = useParams();

const from = moment(fromdate , 'DD-MM-YYYY');
const to = moment(todate , 'DD-MM-YYYY');
const totaldays = moment.duration(to.diff(from)).asDays()+1;

const totalamount =  totaldays * room.rentperday ;

const[loadings,setLoadings] = useState(false);
const user = JSON.parse(localStorage.getItem('currentUser'));

useEffect(()=>{
   setLoadings(true)
   setTimeout(()=>{
setLoadings(false)
   

   },1000) 


  




  },[])




useEffect(()=>{ 
   
    async function fetchDatas(){
        setloading(true);    
       
        await axios.post('http://127.0.0.1:5000/getroombyid' ,{roomid}).then((res)=>{
        const da  =  res.data;
        setRoom(da);
        setloading(false);
        console.log(da);
        })
   }
    fetchDatas();


 



 },[]);



//  async function bookingRoom(){
//     const bookingdetails = {
//         room,
//         username:JSON.parse(localStorage.getItem('currentUser')).name,
//         userid:JSON.parse(localStorage.getItem('currentUser'))._id,

//         fromdate,
//         todate,
//         totaldays,
//         totalamount
//     }
// console.log(bookingdetails);

// await axios.post('http://127.0.0.1:5000/bookroom' ,bookingdetails).then((res)=>{
//     const da  =  res.data;
   
//      setdatas(da);

     
//     })
//      setloadingg(true);
//     console.log(datas);


// }
    // try {
    //    const result = await axios.post('http://127.0.0.1:5000/bookroom',bookingdetails) 
    // } catch (error) {
        
    // }
 
async function onToken(token){
console.log(token);


const bookingdetails = {
    room,
    username:JSON.parse(localStorage.getItem('currentUser')).name,
    userid:JSON.parse(localStorage.getItem('currentUser'))._id,

    fromdate,
    todate,
   
    totaldays,
    token,
    totalamount
}
console.log(bookingdetails);

await axios.post('http://127.0.0.1:5000/bookroom' ,bookingdetails).then((res)=>{
const da  =  res.data;

 setdatas(da);

 
})
 
 swal.fire('congratulations ' ,'your room booked successfully','success')
 .then(result=>{
window.location.href = '/userbookings';
setloadingg(true);
 })



console.log(datas);


}



// async function bookRoom(){


//  const bookingdetails = {
//     room,
//     username:JSON.parse(localStorage.getItem('currentUser')).name,
//     userid:JSON.parse(localStorage.getItem('currentUser'))._id,

//     fromdate,
//     todate,
//     totaldays,
    
//     totalamount
// }
// console.log(bookingdetails);

// await axios.post('http://127.0.0.1:5000/bookroom' ,bookingdetails).then((res)=>{
// const da  =  res.data;

//  setdatas(da);

 
// })
//  setloadingg(true);
// console.log(datas);



//  }



    // const {roomid} = useParams();
  return (
    <div>
        {loadings ? ( <h1><Loader/></h1>) : (<>
             {loadingg && <Success message={datas}/>}
            <div className="body">
                
           <div class="cards">
           <div class="left-sections">
              
               <img class="images" src={room.imageurls} alt="Image"/>
               <h1 class="headings">{room.name}</h1>
           </div>
           <div class="right-sections">
           <h2>Booking Details</h2>
           <h2 class="subheadings">Name:{user.name}</h2>
           <h2 class="subheadings">From Date :{fromdate}</h2>
           <h2 class="subheadings">To Date : {todate} </h2> 
           <h2 class="subheadings">Max Count : {room.maxcount}</h2>
           <h2>Amount</h2>
        
               <h2 class="subheadings">Rent Per Day : {room.rentperday}</h2>
               <h2 class="subheadings">Total Days : {totaldays}</h2>
           
               <h2 class="subheadings">Total Amount :  {totalamount}</h2>
                <div className="current-booking">
                    <div className="shock-icon">
                   <TestSvg/>
                    </div>
                    <div className="booking-text">{room.maxcount}  people Booked this hotel</div>
                </div>
           
        
          
          <StripeCheckout
        token={onToken}
        currency='INR'
        amount={totalamount * 100}
        stripeKey="pk_test_51No1FeSB1ZsdGv2YO8DwzORL0Pr4gVRG2o4YdRZF9jRtlyGLO7UrcNbrICt4buCs03PnVQ9kroqcGsNvR7wvDjsI00zB3CCOHi"
      > 

     <button className='book-button extra'  >BOOK</button>      
        </StripeCheckout>

           {/* <button className='book-button extra' onClick={bookRoom} >BOOK</button>       */}
           </div>
       </div>
    
        
</div>
      </>  )}
     
      
    </div>
  )
}

export default Bookingscreen
