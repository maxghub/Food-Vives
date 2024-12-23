export default function Deactivate(){
    return(
<>
        <div className="deactivatemain">
            <img src="/images/deactivate.webp"></img>
            <div className="deactiavteBox">
                <h3>Change the state of membership</h3>

                <div className="deactivateinput">
                <form action="http://localhost:8080/FoodVibes/LodIn/MembershipState" method="post">
                    <input type='text' placeholder="Userid"  name='userId'></input>
                    <input type='password' placeholder="Password"  name='Password'></input>
                    <select name="state">
                    <option value=''>----</option>
                        <option value='Activate'>Activate</option>
                        <option value='DeActivate'>Deactivate</option>
                    </select>

                    <button type="submit" ><a href="">Change</a> </button>

                    </form>
                </div>
            </div>
        </div>
</>
    )
}