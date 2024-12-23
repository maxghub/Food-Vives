import React from "react";
// import "./Catering.css";
export default function Catering() {
  return (
    <>
      <div id="reservation">
        { <marquee>
          <h3>For Advance Booking Customer need to pay 20% of Total Amount</h3>
        </marquee> }
        <div id="reserveBox">
          <h2>Book for Categring Services</h2>
          <div id="form">
            <form action="" method="post">
                <div class="catering">
                  <div class="cate">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div class="w-form-row for_email">
                  <div class="cate">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div class="catering required">
                  <div class="cate">
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Contact Number *"
                
                    />
                  </div>
                </div>
                <div class="catering">
                  <div class="cate">
                    <input
                      type="textarea"
                      name="address"
                    
                      placeholder="Address"
                    />
                  </div>
                </div>
                <div class="catering">
                  <div class="cate">
                    <input
                      type="text"
                      name="noOfPeoples"
                      
                      placeholder="Total Person"
                    />
                  </div>
                </div>
                <div class="catering">
                  <div class="cate">
                    <input
                      type="date"
                      name="dateOfBooking"
                      
                      placeholder="Date Of Booking"
                    />
                  </div>
                </div>
                <div class="catering">
                  <div class="cate">
                    <input
                      type="tel"
                      name="whatsapp"
                      
                      placeholder="whatsapp No." 
                    />
                  </div>
                </div>
                <div class="catering">
                  <div class="cate">
                    <input
                      type="number"
                      name="requiredEmployee"
                      min="5"
                      placeholder="requiredEmployee" 
                    />
                  </div>
                </div>
                <div class="catering">
                  <div class="cate">
                    <button
                   formaction="http://localhost:8081/catering">
                      Book
                    </button>
                  </div>
                </div>
              </form>
          </div>
        </div>
      </div>
    </>
  );
}
