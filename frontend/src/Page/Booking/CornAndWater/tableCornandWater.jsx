import React, { Fragment, useState, useEffect } from "react";
import CornAndWater from "./CornAWater/cornandwater";
import Checkout1 from "./chekcout1/checkout1";
import axios from 'axios';

export default function TableCornAndWater() {
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
    <div>
      <div className="container-fluid bg-light" style={{ paddingTop: 20 }}>
        <div className="bookCorn__content row mt-5">
          <CornAndWater 
            lcByRoomPhimID={lcByRoomPhimID}
            phimDetail={phimDetail}
          />
          
          <Checkout1 
            lcByRoomPhimID={lcByRoomPhimID}
            phimDetail={phimDetail}
          />
        </div>
      </div>
    </div>
  );
}
