export default function Registration() {
    return (
        <>
            <div id='reg-main'>
                <div id="reg-login">
                    <form method="post">
                        <h1>Login</h1><br></br>
                        <input type="text" className="w-input abc" name="mailid" placeholder="Enter your email"></input><br></br>
                        <input type="text" className="w-input abc" name="pwd" placeholder="Enter your password"></input><br></br>
                        <button className="btn-link" className="w-input">Login</button><br></br>
                    </form>
                </div>
                <div id="reg-signup">
                <h1>Signup</h1><br></br>

                    <input type="text" name="name" className="w-input" placeholder="Enter your name"></input><br></br>

                    <input type="text" name="mailid" className="w-input" placeholder="Enter your email"></input><br></br>
                    <select name="MemberShipType" className="w-input"><br></br>
                        <option value="">None</option>
                        <option value="Silver">Silver</option>
                        <option value="Price">Prime</option>
                    </select><br></br>
                    <input type="text" name="MemberShipType" className="w-input" placeholder="Enter your password"></input><br></br>
                    <input type="text" name="Contact_no" className="w-input" placeholder="Enter your password"></input><br></br>


                    <button className="btn-link">Login</button>
                </div>
            </div>
        </>
    )
}