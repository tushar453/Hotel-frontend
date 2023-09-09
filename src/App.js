import logo from './logo.svg';
import './App.css';
import Hero from './Hero';
import { BrowserRouter as Router , Switch , Route ,Routes  } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Register from './User/Register';
import Login from './User/Login';
import Home from './Route/Home';
import User from './User/User';
import Profile from './User/Profile';
import Bookings from './User/Bookings';
function App() {
  return (
<>

  

      
       
       <Routes>
       <Route path="/" exact element={<Home/>}/>
        <Route path="/room" exact element={<Homescreen/>}/>
         <Route path="/book/:roomid/:fromdate/:todate" element={<Bookingscreen/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/userbookings" element={<Bookings/>}/>
        </Routes>
      
     
    

</>
  );
}

export default App;
