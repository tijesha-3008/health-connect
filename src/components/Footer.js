import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter , faInstagram, faLinkedin, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <h3>Healthify</h3>
                <ul className="part1">
                    <li className="list">About</li>
                    <li className="list">Services</li>
                    <li className="list">Events</li>
                    <li className="list">Support</li>
                </ul>
                </div>
                
                <div className="updates">
                    <h2 className="headupd">Sign Up for Updates</h2>
                    <label><input type="text" className="mail" placeholder='Email' /> <button className="button2"><span>Sign Up</span></button></label>
                </div>

                <div class="contacts">
                    <h2 className="connect1">Follow Us</h2>
                    <div class="icon_section">
                        <FontAwesomeIcon icon={faXTwitter} className="footer_mid_icons"/>
                        <FontAwesomeIcon icon={faInstagram} className="footer_mid_icons"/>
                        <FontAwesomeIcon icon={faLinkedin} className="footer_mid_icons"/>
                        <FontAwesomeIcon icon={faFacebook} className="footer_mid_icons"/>
                        <FontAwesomeIcon icon={faYoutube} className="footer_mid_icons"/>  
                    </div>
                    <h2 className="connect2">Contact Us</h2>
                    <div class="icon_section2">
                        <FontAwesomeIcon icon={faEnvelope} className="footer_mid_icons" />
                    </div>
                </div>
            
            </div>
            <div className="footer2">
                <p className="copyright">Copyright 2024 Healthify | All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;