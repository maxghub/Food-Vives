import {Link } from 'react-router-dom';
import OnClickLink from './OnClickLink';
export default function NavBar() {
    return (
        <>
            <nav>
                <div className="container-menu nav-wrapper">
                    <div className="brand">
                        <img className="nav-logo" src="/Logo/ShortTransperent.png" alt="ShortTransperent.png"></img>
                    </div>
                    <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className="nav-list">
                        <li className="active">
                            <a href="#" ><Link to="HomePage">Home</Link></a>
                        </li>
                        <li><a href="#"><Link to="deact">Caterers</Link></a></li>
                        <li><a href="#"><Link to="bday">Birthday Event</Link></a></li>
                        <li><a href="#"><Link to="career">Career</Link></a></li>
                        
                        <li><OnClickLink /></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}