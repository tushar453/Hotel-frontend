import React, { useState, useEffect } from "react";
import axios from "axios";
import Roomm from "../Room/Roomm";
import Hero from "../Hero";
import moment from "moment";
import About from "../About/About";
import { DatePicker, Space } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
const { RangePicker } = DatePicker;

const Homescreen = () => {
  const [loading, setloading] = useState("");
  const [error, setError] = useState("");
  const [rooms, setRooms] = useState([]);
  const [fromdate, setfromdate] = useState("");
  const [todate, settodate] = useState("");
  const [duplicateRooms, setduplicateRooms] = useState([]);
   const[value , setvalue] = useState('all');
  useEffect(() => {
    async function fetchData() {
      setloading(true);
      await axios.get("https://refr.onrender.com/list").then((res) => {
        const da = res.data;
        setRooms(da);
        setduplicateRooms(da);
        setloading(false);
        console.log(da);
      });
    }
    fetchData();
  }, []);

  function filterBydate(dates) {
    // console.log(dates[0].format("DD-MM-YYYY"));
    // console.log(dates[1].format("DD-MM-YYYY"));

      


    setfromdate(dates[0].format("DD-MM-YYYY"));
    settodate(dates[1].format("DD-MM-YYYY"));
   

    var tempRooms = [];
   
    for (const room of duplicateRooms) {
      var availability = false;
    
      if (room.currentbooking.length > 0) {
        for ( const booking of room.currentbooking) {
          // check between or equal to dates
          if (
            !moment(moment(dates[0]).format("DD-MM-YYYY")).isBetween(
              booking.fromdate,
              booking.todate
            ) &&
            !moment(moment(dates[1]).format("DD-MM-YYYY")).isBetween(
              booking.fromdate,
              booking.todate
            )
           ) {
            
            
            if (
              dates[0].format("DD-MM-YYYY") !== booking.fromdate &&
              dates[0].format("DD-MM-YYYY") !== booking.todate &&
              dates[1].format("DD-MM-YYYY") !== booking.fromdate &&
              dates[1].format("DD-MM-YYYY") !== booking.todate
            ) {

              // console.log("again same date");

              availability = true;
            }
        }
            
        }}
        else{
          availability = true;
        }
      
  
      if (availability === true || room.currentbooking.length == 0) {
        tempRooms.push(room);
      } setRooms(tempRooms);
    }
  
   
   
    

  }

  function filterBYType(e){
    setvalue(e);

  if(e=='all'){
  setRooms(duplicateRooms);

  }

  else{
       const temprooms = duplicateRooms.filter(rooms => rooms.name.toLowerCase()==e.toLowerCase())
     setRooms(temprooms);
  }

  //  if(e!=='all'){
  //   const temprooms = duplicateRooms.filter(rooms => rooms.name.toLowerCase()==e.toLowerCase())
  //   setRooms(temprooms);
  //  }
  //  if(e == 'all'){
  //   setvalue('all');
  //   setRooms(duplicateRooms);
  //  }
  }  

  return (
    <>

      <About/>
      <div className="row filter-section">
        <div className="col-md-3 date-filter">
          <RangePicker format="DD-MM-YYYY" onChange={filterBydate} />
        </div>
   <div className="col-md-3">
    
    <select className="type-filter" value={value} onChange={(e)=>{
    filterBYType(e.currentTarget.value)
   }} >
          <option value='all' >All</option>
          <option value="delux">Delux</option>
          <option value="non-delux">non-delux</option>
        </select></div>
        
      </div>
      
      <div className="container-2">
        
        {loading ? (
           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '40px 0' }}>
    <svg 
      style={{ animation: 'spin 1s linear infinite', width: '45px', height: '45px' }} 
      viewBox="0 0 50 50"
    >
      <style>{`
        @keyframes spin { 100% { transform: rotate(360deg); } }
        @keyframes dash { 
          0% { stroke-dasharray: 1, 150; stroke-dashoffset: 0; }
          50% { stroke-dasharray: 90, 150; stroke-dashoffset: -35; }
          100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124; }
        }
      `}</style>
      <circle 
        cx="25" 
        cy="25" 
        r="20" 
        fill="none" 
        stroke="#3498db" /* Isko aap apne background ke hisab se change kar sakte ho */
        strokeWidth="5" 
        strokeLinecap="round"
        style={{ animation: 'dash 1.5s ease-in-out infinite' }}
      />
    </svg>
    <p style={{ marginTop: '12px', color: '#666', fontSize: '14px', fontFamily: 'sans-serif' }}>Loading rooms...</p>
  </div>
        ) : (
          rooms.map((room) => {
            return (
              <div className="box">
                <Roomm
                  path="/room"
                  room={room}
                  fromdate={fromdate}
                  todate={todate}
                />
              </div>
            );
          })
        )}
        {/* <h1>home</h1> */}
      </div>
    </>
  );
};

export default Homescreen;


// console.log("current booking");
// console.log(  booking.fromdate);
// console.log("to date");
// console.log(booking.todate);
// console.log("curr date");
// console.log(dates[0].format("DD-MM-YYYY"));
// console.log("curri date");
// console.log(dates[1].format("DD-MM-YYYY"))