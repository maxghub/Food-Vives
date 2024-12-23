export default function Career() {
    return (
        <>
            <div id="background-section">
                <img src="./images/bg.jpeg" alt=""></img>
                    <div id="main-section">
                        <div id="career-header">
                            <h1>Career</h1>
                        </div>
                        <div id="form-section">
                            <form action="" id="forms">
                                <table class="details-section">
                                    <tr>
                                        <th><label for="name">Name</label></th>
                                        <th><input type="text" name="name" id="name" placeholder="Enter your name"></input></th>
                                    </tr>
                                    <tr>
                                        <th><label for="name">Surname</label></th>
                                        <th><input type="text" name="surname" id="surname" placeholder="Enter your surname"></input></th>
                                    </tr>
                                    <tr>
                                        <th><label for="age">Age</label></th>
                                        <th><input type="text" name="age" id="age" placeholder="Enter your age"></input></th>
                                    </tr>
                                    <tr>
                                        <th><label for="address">Address</label></th>
                                        <th><input type="text" name="address" id="address" placeholder="Enter your address"></input></th>
                                    </tr>
                                    <tr>
                                        <th><label for="city">City</label></th>
                                        <th><input type="text" name="city" id="city" placeholder="Enter your city"></input></th>
                                    </tr>
                                    <tr>
                                        <th><label for="state">State</label></th>
                                        <th><input type="text" name="state" id="state" placeholder="Enter your state"></input></th>
                                    </tr>
                                    <tr>
                                        <th><label for="pincode">Pincode</label></th>
                                        <th><input type="text" name="pincode" id="pincode" placeholder="Enter your pincode"></input></th>
                                    </tr>
                                    <tr>
                                        <th><label for="mobileNumber">Mobile Number</label></th>
                                        <th><input type="text" name="mobileNumber" id="mobileNumber" placeholder="Enter your mobile number"></input></th>
                                    </tr>
                                    <tr>
                                        <th><label for="emailId">E-mail</label></th>
                                        <th><input type="text" name="emailId" id="emailId" placeholder="Enter your e-mail"></input></th>
                                    </tr>
                                    <tr>
                                        <th><label for="profession">Profession</label></th>
                                        <th><input type="text" name="profession" id="profession" placeholder="Enter your profession"></input></th>
                                    </tr>
                                    <tr>
                                        <th><label for="experience">Experience</label></th>
                                        <th><input type="text" name="experience" id="experience" placeholder="Enter your experience"></input></th>
                                    </tr>


                                </table>
                                <div id="submit-button">
                                    <button type="submit">submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        </>
    )
}