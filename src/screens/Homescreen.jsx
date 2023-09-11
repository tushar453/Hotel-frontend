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
      <Hero heading="The Best Rooms and Service For You" />
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
          <h1>Loading...</h1>
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