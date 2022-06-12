import React, { Fragment, useState, useEffect } from "react";
import ChooseSlot from "./ChooseSlot/chooseslot";
import Checkout from "./CheckOut/checkout";
import axios from 'axios';

export default function BookingTicket() {
  
  const getUrlPhim= window.location.href.split("/");
  const phimID = getUrlPhim[getUrlPhim.length - 2]
  const roomID = getUrlPhim[getUrlPhim.length - 1]

  const [lcByRoomPhimID,setlcByRoomPhimID] = useState(null);
  useEffect(() => {
    const getLCByRoomPhimID = () => {
      axios.get('/lc/getlc/' + phimID + '/'+ roomID ).then(res => {
        setlcByRoomPhimID(res.data);
      })
    }
    getLCByRoomPhimID();
  },[phimID,roomID]);

  const [phimDetail,setPhimDetail] = useState(null);
  useEffect(() => {
    const getPhimDetail = () => {
      axios.get('/phim/detail/' + phimID).then(res => {
        setPhimDetail(res.data);
      })
    }
    getPhimDetail();
  },[phimID]);
 
  
  return (
    <Fragment>
      <div className="container-fluid bg-light" style={{ paddingTop: 30 }}>
        <div className="bookTicket__content row mt-5">
          <ChooseSlot lcByRoomPhimID = {lcByRoomPhimID}
                      phimDetail={phimDetail}
          />
          <Checkout lcByRoomPhimID = {lcByRoomPhimID}
                      phimDetail={phimDetail}
            
          />
          
        </div>
        
      </div>
    </Fragment>
  );
}
