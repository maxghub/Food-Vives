export default function ContactUs() {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div className="ContactMain">
                <div className="RightSide">
                    <h1>CONTACT US</h1>
                    <h3>FoodVibes</h3>
                    <p>Lets us know what's on your mind, we'llget back to you soon</p>
                    <div className="cutomerdetailscontact">
                        <div className="Cont">
                            <label for="">FirstName</label>
                            <input type="text"></input>
                        </div>
                        <div className="Cont">
                            <label for="">Last Name</label>
                            <input type="text"></input>
                        </div>
                        <div className="Cont">
                            <label for="">E-MAIL ADDRESS</label>
                            <input type="mail"></input>
                        </div>
                        <div className="Cont">
                            <label for="">TelePhone Number </label>
                            <input type="text"></input>
                        </div>

                        <div className="ContCommentBox">
                            <div className="Cont">
                                <label for="">Comment </label>
                                <textarea rows="10" cols="49.9"></textarea>
                            </div>
                        </div>

                        <button type="submit" className="conctsend">Send</button>
                        <></>



                    </div>
                </div>

                <div className="LeftSide">
                    <div className="iconcont">

                        <div className="leftcont">
                        <div className="classicon">
                            <i class="fa-brands fa-whatsapp"></i>
                        </div>
                        <h2>WHATSAPP</h2>
                        <p>Avaible 24/7</p>
                        </div>

                        <div className="leftcont">
                        <div className="classicon">
                            <i class="fa-sharp fa-solid fa-mobile"></i>
                        </div>
                        <h2>TELEPHONE</h2>
                        <p>Accecsible Mon-Sat</p>
                        </div>

                        <div className="leftcont">
                        <div className="classicon">
                            <i class="fa-sharp fa-solid fa-location-dot"></i>
                        </div>
                        <h2>ADDRESS</h2>
                        <p>JAIPUR, RAJSTHAN</p>
                        </div>

                        <div className="leftcont">
                        <div className="classicon">
                        <i class="fa-solid fa-car"></i>
                        </div>
                        <h2>PARKING</h2>
                        <p>GT Mall Central, Basement</p>
                        </div>
                       

                        <div className="leftcont">
                        <div className="classicon">
                            <i class="fa-regular fa-clock"></i>
                        </div>
                        <h2>OPENING HOURS</h2>
                        <p>Monday to Sunday</p>
                        <p>04:00PM - 11:00PM</p>
                        </div>
                    </div>
                </div>
                

            </div>
            <div className="copyright"><span >@Yogita Vaishanv</span></div>
            

        </>
    )
}