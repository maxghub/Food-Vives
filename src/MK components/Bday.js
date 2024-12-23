import React from 'react'
import './Bday.css';
export default function Bday() {
  return (
    <>
        <section id="contact" className="section-contact12">
            <div className="page-padding">
              <div className="container-large">
                <div className="padding-vertical padding-xhuge">
                  <div className="margin-bottom margin-large">
                    <div className="max-width-large">
                      <div className="margin-bottom margin-xsmall">
                        <div className="text-weight-semibold">Book Your Table</div>
                      </div>
        <div className="margin-bottom margin-small">
            <h2>FoodVives</h2>
          </div>
        </div>
      </div>
      <div className="w-layout-grid contact12_component">
          <form
           action=''
            data-name="Vraag via de website"
            method="post"
            className="contact12_form"
          >
            <div className="form-field-2col">
              <div className="form-field-wrapper">
                <label for="voornaam" className="field-label"
                  >Booking Date</label
                ><input
                  type="date"
                  className="form-input w-input"
                  maxlength="256"
                  name="booking"
                  placeholder=""
                  id="voornaam"
                  required=""
                />
              </div>
              <div className="form-field-wrapper">
                <label for="achternaam" className="field-label"
                  >Booking Time</label
                ><input
                  type="time"
                  className="form-input w-input"
                  maxlength="256"
                  name="Time"
                  placeholder=""
                  id="achternaam"
                  required=""
                />
              </div>
              
            </div>
            <div className="form-field-2col">
              <div className="form-field-wrapper">
                <label for="e-mail" className="field-label"
                  >Mobile No.</label
                ><input
                  type="tel"
                  className="form-input w-input"
                  maxlength="25"
                  name="mob"
                  placeholder=""
                  id="e-mail"
                  required=""
                />
              </div>
              <div className="form-field-wrapper">
                <label for="Contact-12-Phone" className="field-label"
                  >Name</label>
                  <input
                  type="text"
                  className="form-input w-input"
                  maxlength="256"
                  name="name"
                  placeholder=""
                  id="Contact-12-Phone"
                  required=""
                />
              </div>
            </div>
            <div className="form-field-2col">
            <div className="form-field-wrapper">
              <label for="Contact-12-Select" className="field-label"
                >durationOfEvent</label>
                <input
                  type="number"
                  className="form-input w-input"
                  maxlength="256"
                  name="durationOfEvent"
                  max="3"
                  min="1"
                  id="Contact-12-Phone"
                  required=""
                />

            </div>
            <div className="form-field-wrapper">
              <label for="Contact-12-Select" className="field-label"
                >Total Person</label>
                <input
                  type="number"
                  className="form-input w-input"
                  maxlength="256"
                  max="8"
                  min="1"
                  name="noOfPerson"
                  placeholder=""
                  id="Contact-12-Phone"
                  required=""
                />

            </div>
            </div>
            <div className="form-field-wrapper">
              <label for="Contact-12-Select" className="field-label"
                >Address</label>
                <input
                  type="textarea"
                  className="form-input w-input"
                  maxlength="256"
                  name="address"
                  placeholder=""
                  id="Contact-12-Phone"
                  required=""
                />

            </div>
            <div className="form-field-wrapper">
              <label for="Contact-12-Select" className="field-label"
                >Table No.</label>
                <input
                  type="number"
                  max="40"
                  className="form-input w-input"
                  maxlength="256"
                  min="1"
                  name="tablenumber"
                  placeholder=""
                  id="Contact-12-Phone"
                  required=""
                />

            </div>




         <div className="cake">
            
       
            {/* <div className="form-field-wrapper"> */}
              <label for="Contact-12-Message" 
                >Cake</label
              >
    <input type="radio" name="cake" id="Contact-12-Message" value="650" className='cak1'/>650
   <input type="radio" name="cake" id="Contact-12-Message" value="800"className='cak1'/>800
   <input type="radio" name="cake" id="Contact-12-Message" value="900" className='cak1'/>900
            {/* </div> */}
            
            </div>

            <div className="cake">
            
       
            {/* <div className="form-field-wrapper"> */}
              <label for="Contact-1" 
                >Gender</label
              >
    <input type="radio" name="Gender" id="Contact-1" value="male" className='gender'/>male
   <input type="radio" name="Gender" id="Contact-1" value="female" className='gender'/>female
   <input type="radio" name="Gender" id="Contact-1" value="other"className='gender'/>other
            {/* </div> */}
            
            </div>
            <button type="submit"  className="button w-button"
              value="Book Now"
                    formaction="http://localhost:8081/birthday"> Book Now</button>
          </form>
          </div>
          </div>
          </div> 
          </div>     
          </section>
    </>
  )
}
