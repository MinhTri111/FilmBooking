import React, { Fragment, useEffect, useState } from "react";
import "./chooseslot.scss";
import axios from 'axios';
import swal from "sweetalert";
import clsx from 'clsx'
const seats = Array.from({ length: 8 * 8 }, (_, i) => i)
const movies = [
  {
    name: 'Avenger',
    price: 10,
    occupied: [20, 21, 30, 1, 2, 8],
  },
]
export default function ChooseSlot({lcByRoomPhimID,phimDetail}) {
  var moment = require("moment");
  const getUrlPhim= window.location.href.split("/");
  const phimID = getUrlPhim[getUrlPhim.length - 2]
  const roomID = getUrlPhim[getUrlPhim.length - 1]
  const [selectedMovie, setSelectedMovie] = useState(movies[0])
   const [selectedSeats, setSelectedSeats] = useState([])
  const [counter, setCounter] = useState(60 * 5);
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      swal("Bạn đã chọn vé quá lâu! Ahihi", {
        icon: "error",
      });
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  }, [counter]);
  
  if(phimDetail){
    return (
      <div className="checkOut__left col-md-9 col-sm-12 p-0">
        <div className="bookSlot">
          <div className="bookSlot__content">
            <div className="theater__info d-flex justify-content-between">
              <div className="theater__img d-flex bg-light">
                <img src={phimDetail.result[0].poster} alt="hinhanh" />
                <div className="theater__name">
                  <span className="name">
                    <span className="subname">
                      Rạp {lcByRoomPhimID.result[0].room_id}
                    </span>
                  </span>
                  <p className="showtime">
                    Giờ chiếu: {moment(lcByRoomPhimID.result[0].thoi_gian_chieu).format("hh:mm A")}
                  </p>
                </div>
              </div>
              <div className="timeKeepSlot">
                <p className="title__text">thời gian giữ ghế</p>
                <span className="time">{counter + "s"}</span>
              </div>
            </div>
            <div className="chooseSlot">
              <div className="screen__img">
                <img src="https://i.ibb.co/zWgWjtg/screen.png" alt="screen" />
              </div>
              <div className="picking row">
                <div className="slot__picking col-11">
                  <div className="slot__row">
                    <div >
                    
                    <Cinema
                     movie={selectedMovie}
                    selectedSeats={selectedSeats}
                    onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
                    />
 
                    <p className="info">
                          You have selected <span className="count">{selectedSeats.length}</span>{' '}
                          seats for the price of{' '}
                        <span className="total">
                          {selectedSeats.length * selectedMovie.price}$
                        </span>
                    </p>
                    
                    </div>
                  </div>
                </div>
              </div>
              <div className="slot__detail row">
                <div className="col-md-3 col-sm-6 col-xs-6">
                  <span className="seat" /> <small>N/A</small>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6">
                  <span className="seat selected" /> <small>Selected</small>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6">
                  <span className="seat occupied" /> <small>Occupied</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat)
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter(selectedSeat => selectedSeat !== seat),
      )
    } else {
      onSelectedSeatsChange([...selectedSeats, seat])
    }
  }

  return (
    <div className="Cinema">
      <div className="seats">
        {seats.map(seat => {
          const isSelected = selectedSeats.includes(seat)
          const isOccupied = movie.occupied.includes(seat)
          return (
            <span
              tabIndex="0"
              key={seat}
              className={clsx(
                'seat',
                isSelected && 'selected',
                isOccupied && 'occupied',
              )}
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              onKeyPress={
                isOccupied
                  ? null
                  : e => {
                      if (e.key === 'Enter') {
                        handleSelectedState(seat)
                      }
                    }
              }
            />
          )
        })}
      </div>
    </div>
  )
}

