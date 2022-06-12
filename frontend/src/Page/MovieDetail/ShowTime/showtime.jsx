import React, {useEffect,useState} from "react";
import { NavLink } from "react-router-dom";
import "./showtime.css";
import Description from "../Description/description";
// import Comment from "../Comment/Comment";
import axios from 'axios';
export default function ShowTime() {
  var moment = require("moment");
  const [lcDetail,setLCPhimDetail] = useState(null);
  const getUrlPhim= window.location.href.split("/");
  const phimID = getUrlPhim[getUrlPhim.length - 1]
  const [lcByRoomPhimID,setlcByRoomPhimID] = useState(null);
  useEffect(() => {
    const getLCByRoomPhimID = () => {
      
      axios.get('/lc/getlc/' + phimID + '' ).then(res => {
        setlcByRoomPhimID(res.data);
      })
    }
    getLCByRoomPhimID();
  },[phimID]);
  console.log(lcByRoomPhimID);
  
  useEffect(() => {
    const getLCDetail = () => {
      axios.get('/lc/getByIdPhim/' + phimID).then(res => {
        setLCPhimDetail(res.data);
      })
    }
    getLCDetail();
  },[phimID]);
  
  const renderRap = () => {
    if(lcDetail) {
      return (
        <div>
          { React.Children.toArray(
            lcDetail.result.map((d) =>(
          <a
          
          className="nav-link"
          id="v-pills-cgv-tab"
          data-toggle="pill"
          href={`#${lcDetail.room_id}`}
          // href=""
          role="tab"
          aria-controls="v-pills-cgv"
          aria-selected="true"
        >
              <div className="img__content">
            <img src="https://i.ibb.co/cvb2Rk6/theater.jpg" alt=""/>
            
            <div className="img__text">
              <div className="img__name">Rạp {d.room_id}</div>
            </div>
          </div>
        </a>
          )))}
        </div>
        
      );
    }
  };
 
  const renderTime = () => {
    if(lcDetail){
      return (
        <div>
          {
            React.Children.toArray(
              lcDetail.result.map((d) => (
                <ul className=" flex-wrapp" >
                <div className="timeshow__item" >
                  <NavLink
                  
                    className="timeshow__link"
                    to={'/booking/'+ d.id_phim + '/'+d.room_id}
                  >
                    <div className="time__begin mb-2">
                    {moment(d.thoi_gian_chieu).format("DD/MM/yyyy")}
                      <p>
                      {moment(d.thoi_gian_chieu).format("hh:mm A")}
                      </p>
                    </div>
                  </NavLink>
                </div>
          </ul>
              )))}
        </div>
      );
    }};

  return (
    <section className="tabBookMovie">
      <div className="container">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-schedule"
              role="tab"
              aria-controls="pills-schedule"
              aria-selected="true"
            >
              Lịch Chiếu
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-info"
              role="tab"
              aria-controls="pills-info"
              aria-selected="false"
            >
              Thông Tin
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-contact-tab"
              data-toggle="pill"
              href="#pills-comment"
              role="tab"
              aria-controls="pills-comment"
              aria-selected="false"
            >
              Đánh Giá
            </a>
          </li>
        </ul>
        {/* TAB LỊCH CHIẾU */}
        <div id="movieTheater" className="tab-content">
          <div
            className="tab-pane fade show active"
            id="pills-schedule"
            role="tabpanel"
            aria-labelledby="pills-schedule-tab"
          >
            <div className="movieTheater__row row bg-light">
              <div className="row__left col-md-4 col-sm-12">
                <div
                  className="nav flex-column nav-pills"
                  id="v-pills-rap"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  {/* {renderRap()} */}
                </div>
              </div>
              <div
                className="tab-content col-md-8 col-sm-12"
                id="v-pills-tabContent"
              >
                {renderTime()}
              </div>
            </div>
          </div>
          {/**Thông tin */}
          <div
            className="tab-pane fade"
            id="pills-info"
            role="tabpanel"
            aria-labelledby="pills-info-tab"
          >
            <Description  />
          </div>
          {/**Bình luận */}
          <div
            className="tab-pane fade"
            id="pills-comment"
            role="tabpanel"
            aria-labelledby="pills-comment-tab"
          >
            {/* <Comment thongTin={phim} maPhim={maPhim} /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
