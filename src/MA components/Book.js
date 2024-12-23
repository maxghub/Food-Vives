
export default function Book() {
    return (
        <><div className="main-book">

        </div>
            <div className="checkout">
                <div id="header">
                    <h2 align-items="center" >CHECKOUT</h2>
                </div>
                <div className="bodycheckout">
                    <div id="bodycheckoutfirst">Your reservation for table  </div>
                    <br></br>
                    <div id="bodycheckoutsecond">Your reservtion end after 6 hour </div>
                    <span></span>
                    <br></br>
                    <div id="bodycheckoutthird" >
                        <form action="">
                            <input type="text" placeholder="Vocher or promotion Code"></input>
                            <button id="apply"><a href="">Apply</a></button>
                        </form>
                    </div>
                </div>
                <div id="bodycheckoutfourth">
                    <h3>Your contact details</h3>
                    <form action="">
                        <div id="radio">
                            <input type="radio" id="mr" name="mss"></input><label for="mr">Mr.</label>
                            <input type="radio" id="ms" name="mss"></input><label for="ms">Ms.</label>
                            <input type="radio" id="fm" name="mss"></input><label for="fm">family</label>
                            <input type="radio" id="com" name="mss"></input><label for="com">Company</label>
                        </div>
                        <div id="name">
                            <input type="text" placeholder="First name" size="30"></input>
                            <input type="text" placeholder="Last name" size="30"></input>
                        </div>
                        <div id="phone">
                            <input type="text" placeholder="Email" size="30"></input>
                            <input type="text" placeholder="Phone number" size="30"></input>
                        </div>
                    </form>
                </div>
                <div id="bodycheckoutfive">
                    <input type="checkbox" name="" id="tick"></input>
                    <label for="tick">   Don't miss out on the latest
                        events,promotions and other offers from La Barrca
                    </label>
                </div>
                <button id="book"><a href="">Book Now</a></button>
                <div className="terms">
                    <p>By booking a table you agree to our <a href="">Terms & Conditions.</a> A table is instntly reserved for you. </p>
                </div>
            </div>
        </>
    )
}