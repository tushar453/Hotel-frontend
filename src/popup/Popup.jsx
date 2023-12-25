import React, { useEffect ,useState} from 'react'
import './popup.css';
import axios from 'axios';
import Success from '../component/Success';
import Logo from '../Logo'
const Popup = () => {
    const[name , setName] =   useState("");
    const[email , setEmail] =   useState("");
    const[roomtype , setRoomtype] =   useState("");
    const[messages , setMessages] =   useState("");
    const[text , settext] = useState("");
    const[loading , setLoading] = useState(false);
    const  registeruser = async(e)=>{
        e.preventDefault();
        const data= {
            name,
            email,
            roomtype,
            messages,
            
            } 
            await axios.post('https://refr.onrender.com/sendmessage' ,data).then((res)=>{
                const da  =  res.data;
                settext(da);
                });
                setLoading(true);
                document.getElementById('btnStartVisit').click();

                setName("");
    setEmail("");
    setRoomtype("");
    setMessages("");
    console.log(text);
    






            
    };



    useEffect(() => {
    // Get the overlayss and modals elements
var overlayss = document.getElementById('overlayss');
var modals = document.getElementById('mymodals');

// Get the <span> element that closes the modals
var closeBtn = document.getElementsByClassName('close')[0];

// When the window loads, display the overlayss and modals
window.onload = function() {
  overlayss.style.display = 'block';
  modals.style.display = 'block';
}

// When the user clicks on <span> (x) or the overlayss, close the modals
closeBtn.onclick = function() {
  closemodals();
}

window.onclick = function(event) {
  if (event.target == overlayss) {
    closemodals();
  }
}

// Function to close the modals
function closemodals() {
  overlayss.style.display = 'none';
  modals.style.display = 'none';
}


      });
  return (
    <div id="overlayss" class="overlayss">
    
    <div id="mymodals" class="modals">
      
      <div class="modals-content">
        <span class="close" id='btnStartVisit'>&times;</span>
       
        <div class="containersss">
        {/* <span class="close">&times;</span> */}
      
     <div class="formss">
      



       <div class="contact-formss">
         <span class="circless one"></span>
         <span class="circless two"></span>
          <Logo/>
         <form action="index.html" autocomplete="off" className='form'>
           <h3 class="titless">Contact us</h3>
           <div class="input-containerss">
             <input type="text" name="name" class="inputss"     value={name} onChange={(e)=>{setName(e.target.value)}} required/>
             <label for="">Name</label>
             <span>Name</span>
           </div>
           <div class="input-containerss">
             <input type="email" name="email" class="inputss"  value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
             <label for="">Email</label>
             <span>Email</span>
           </div>
          
           
           <div class="input-containerss">
             <input type="text" name="phone" class="inputss"   value={roomtype} onChange={(e)=>{setRoomtype(e.target.value)}} required/>
             <label for="">Contact No</label>
             <span>Phone</span>
           </div>
           <div class="input-containerss textareass">
             <textarea name="message" class="inputss" required  value={messages} onChange={(e)=>{setMessages(e.target.value)}}></textarea>
             <label for="">Message</label>
             <span>Message</span>
           </div>
           <button className='btnss' type='submit' onClick={registeruser}>Send</button>
           {/* <input type="submit" value="Send" class="btnss" /> */}
         </form>
       </div>
     </div>
   </div>

      </div>
    </div>
  </div>

  )
}

export default Popup
