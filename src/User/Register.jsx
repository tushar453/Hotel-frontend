import React,{useState} from 'react'
import './Register.css';
import Hero from '../Hero';
import axios from 'axios';
import { NavLink,Link } from "react-router-dom"
import Success from '../component/Success';
const Register = () => {

    const[name , setName] =   useState("");
    const[email , setEmail] = useState("");
    const[password , setpassword] = useState("");
    const[cpassword , setcpassword] = useState("");
    const[loading , setLoading] = useState(false);
      const[text , settext] = useState("");


const  registeruser = async(e)=>{
    e.preventDefault();

if(password == cpassword){
    const data= {
name,
email,
password,
cpassword
} 

await axios.post('https://refr.onrender.com/register' ,data).then((res)=>{
    const da  =  res.data;
     settext(da);
    })
    setName("");
    setEmail("");
    setpassword("");
    setcpassword("");
    setLoading(true);


    console.log(data);
}
else{
    console.log("erroe")
}


   
}


  return (

    <>
    <Hero heading = "Enter The Details To Have A Tour Of The Best Rooms"/>
    {loading &&  <Success message={text}/>}
   
    <div class="container-2">
    <form>
        <h2>Sign Up</h2>
        <div class="input-container">
            <input type="text" id="name"   value={name} onChange={(e)=>{setName(e.target.value)}} required/>
            <label for="name">Name</label>
        </div>
        <div class="input-container">
            <input type="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}   required/>
            <label for="email">Email</label>
        </div>
        <div class="input-container">
            <input type="password" id="password"  value={password} onChange={(e)=>{setpassword(e.target.value)}} required/>
            <label for="password">Password</label>
        </div>
        <div class="input-container">
            <input type="password" id="confirm-password" value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}} required/>
            <label for="confirm-password">Confirm Password</label>
        </div>


        <div className="buttons-1">
             <button className='book-button extra' onClick={registeruser}     type="submit extra">Sign Up</button> 
             

           
            <Link to ="/login"  ><button className='book-button extra-2 extra-3' type="submit">Login</button> </Link>
   
        </div>
       
    </form>
</div>


  </>)
}

export default Register
