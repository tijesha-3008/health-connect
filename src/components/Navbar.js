import React, { useState } from "react";
import toggle_light from '../Assets/night.png';
import logo_light from '../Assets/medic-health-center.svg';
import toggle_dark from '../Assets/day.png';
import './Navbar.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown , faCaretRight} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ theme, setTheme }) => {
    const [showServicesDropdown, setShowServicesDropdown] = useState(false);
    
    const toggle_mode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }
    
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    
    const handleServicesClick = () => {
        setShowServicesDropdown(!showServicesDropdown);
    }

    return (
        <div className="navbar">
            <div>
                <img src={logo_light} alt="" className="LOGO" />
                <h6 className="appname">Healthify</h6>
            </div>
            <ul>
                <Link to="/home"><li className="nav-link nav-link-ltr">Home</li></Link>
                <li className="nav-link nav-link-ltr">About Us</li>
                <li className="nav-link nav-link-ltr" onClick={handleServicesClick}>Services
                    {showServicesDropdown &&
                        <ul className="dropdown">
                            <li className="listitem"><span><FontAwesomeIcon icon={faCaretRight} className="variable" /></span><Link to="/symptom-checker" className="feature">Symptom Checker</Link></li>
                            <li className="listitem"><span><FontAwesomeIcon icon={faCaretRight} className="variable" /></span><Link to="/medication-tracker" className="feature">Medication Tracker</Link></li>
                            <li className="listitem"><span><FontAwesomeIcon icon={faCaretRight} className="variable" /></span><Link to="/appointment-booking" className="feature">Appointment Booking</Link></li>
                            <li className="listitem"><span><FontAwesomeIcon icon={faCaretRight} className="variable" /></span><Link to="/health-education" className="feature">Health Education</Link></li>
                            <li className="listitem"><span><FontAwesomeIcon icon={faCaretRight} className="variable" /></span><Link to="/veterinary-appointment" className="feature">Veterinary Appointment Booking</Link></li>
                        </ul>
                    }
                    <span><FontAwesomeIcon icon={faCaretDown} className="variable variable1" /></span>
                </li>
                <li className="nav-link nav-link-ltr">Contact</li>
            </ul>
            
            {isAuthenticated &&
                (
                <Link to="/profile"><button className="login">Welcome, {user.name}</button></Link>
                )}
            
            {
                isAuthenticated ?
                (<div className="buttons">
                <button className="login" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                 Log Out
                </button>
                </div>)
                    :
                (<div className="buttons">
                <button className="login" onClick={() => loginWithRedirect()}>Log In</button>
                </div>)
            }
            
            <div>
              <img onClick={()=>{toggle_mode()}} src={theme ==='light' ? toggle_light : toggle_dark} alt="" className="toggle-icon"/>
            </div>
        </div>
    );
}

export default Navbar;
