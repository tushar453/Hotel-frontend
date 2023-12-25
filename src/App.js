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
import Admin from './admin/Adminpanel'
import Bookings from './User/Bookings';
import Adminbookings from './admin/Adminbookings';
import Adminusers from './admin/Adminusers';
import Adminroom from './admin/Adminroom';
import Addroom from './admin/Addroom';
import About from './About/About';
// import Gallery from './Gallery/Gallerys';
import All from './Gallery/All';
import Mountain from './Gallery/Mountain';
import Beach from './Gallery/Beach';
import City from './Gallery/City';
import Gallerys from './Gallery/Gallerys';
import Galnav from './Gallery/Galnav';
import Popup from './popup/Popup';
import Adminmessages from './admin/Adminmessages';
function App() {
  return (
<>



      
       
       <Routes>
       <Route path="/" exact element={<Home/>}/>
        {/* <Route path="/Gallery" exact element={<Gallery/>}/> */}
         <Route path="/book/:roomid/:fromdate/:todate" element={<Bookingscreen/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/userbookings" element={<Bookings/>}/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/Adminbook" element={<Adminbookings/>}/>
        <Route path="/Adminusers" element={<Adminusers/>}/>
        <Route path="/Adminmessages" element={<Adminmessages/>}/>
        <Route path="/Adminroom" element={<Adminroom/>}/>
        <Route path="/Addroom" element={<Addroom/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Galnav" element={<Galnav/>}/>
        <Route path="/All" element={<All/>}/>
        <Route path="/City" element={<City/>}/>
        <Route path="/Mountain" element={<Mountain/>}/>
        <Route path="/Beach" element={<Beach/>}/>
        {/* <Route path="/gallery" element={<Gallerys/>}/> */}
        </Routes>
      
     
    

</>
  );
}

export default App;
