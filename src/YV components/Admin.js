import React from 'react'
import './Admin.css';
export default function Admin() {
  return (
    <>
    
    <h1>Admin </h1>

        <div id="admin">
            <div className="table">
                <button className="btn"><a href="">Check Reservation Seats Availibility</a></button>
            </div>

            <div className="table">
                <button className="btn"><a href="">Check Reservation's Details</a></button>
            </div>
            <div className="table">
                <button className="btn"><a href="">Click to Change the Previous Day data</a></button>
            </div>

            <div className="table">
                <button className="btn"><a href="">Update the price of Food Item</a></button>
            </div>

            <div className="table">
                <button className="btn"><a href="">Delete the Food Item from Menu</a></button>
            </div>

            <div className="table">
                <button className="btn"><a href=""> Resturant's Employee Data</a> </button> 
            </div>
        


        </div>

    </>
  )
}
