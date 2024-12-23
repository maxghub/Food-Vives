import React from 'react'
import './App.css';
export default function Reservation() {
  return (
    <>

      <div id="reservation">
        <img src='/reserve.jpeg'></img>

        <div id="reserveBox">
          <h1>Book Your Seat</h1>
          <div id="form">
            <form action="">

              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Number of Peoples" />
              <input type="text" placeholder="Day" />
              <input type="text" placeholder="Slot" />
              <button>Reserve</button>

            </form>

          </div>

        </div>
      </div>

    </>
  )
}
