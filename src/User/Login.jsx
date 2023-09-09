import React,{useState} from 'react'
import Hero from '../Hero'
import axios from 'axios';
import Success from '../component/Success';
const Login = () => {

    
    const[email , setEmail] = useState("");
    const[password , setpassword] = useState("");
    const[loading , setLoading] = useState(false);
    const[data , setData] = useState("");


const loginuser = async(e)=>{
    e.preventDefault();
    
    
    
    const data= {

email,
password,

}
await axios.post('http://127.0.0.1:5000/login' ,data).then((res)=>{
    const da  =  res.data;
    console.log(da);
    setData(da);
       localStorage.setItem('currentUser', JSON.stringify(da));
    })
    
    setEmail("");
    setpassword("");
    setLoading(true);

   window.location.href = '/'



    
    console.log(data);
}





  return (

    <>
{<Hero heading="Please Enter Your Details to Login " />}
{loading &&  <Success message="Logged In Successfully"/>}
    <div class="container-2">
    <form>
        <h2>Login</h2>
       
        <div class="input-container">
            <input type="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}       required/>
            <label for="email">Email</label>
        </div>
        <div class="input-container">
            <input type="password" id="password"   value={password} onChange={(e)=>{setpassword(e.target.value)}}   required/>
            <label for="password">Password</label>
        </div>
      

     
             <button className='book-button extra' type="submit extra" onClick={loginuser}   >Login</button> 
             

           
        
       
    </form>
</div></>
  )
}

export default Login
