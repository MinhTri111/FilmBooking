
 import './cscopy.css'
 import React, { useState } from 'react'
 import clsx from 'clsx'
 
 const movies = [
   {
     name: 'Avenger',
     price: 10,
     occupied: [20, 21, 30, 1, 2, 8],
   },
 ]
 
 const seats = Array.from({ length: 8 * 8 }, (_, i) => i)
 
 export default function ChooseSlotCopy() {
   const [selectedMovie, setSelectedMovie] = useState(movies[0])
   const [selectedSeats, setSelectedSeats] = useState([])
 
   return (
     <div className="ChooseSlotCopy">
       
       <ShowCase />
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
   )
 }
 
 
 
 function ShowCase() {
   return (
     <ul className="ShowCase">
       <li>
         <span className="seat" /> <small>N/A</small>
       </li>
       <li>
         <span className="seat selected" /> <small>Selected</small>
       </li>
       <li>
         <span className="seat occupied" /> <small>Occupied</small>
       </li>
     </ul>
   )
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
       <div className="screen" />
 
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
 