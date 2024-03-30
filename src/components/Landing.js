import React from "react";
import './Landing.css';
import hero_image from '../Assets/portrait-of-cheerful-multi-generation-family-at-home.jpg'
// import arrow_right from '../Assets/arrow-right (1).svg'
import feature1_img from '../Assets/leading_healthcare_illustration.svg'
import feature1_img2 from '../Assets/light-red-heart-md.png'
import { Check } from 'react-feather';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
    };
    return (
        <div>
            <div className="hero">
                {/* left part */}
                <div className="left">
                    <h1 className="heading1">Empowering Health,Embracing Wellness</h1>
                    <div className="line"></div>
                    <p className="paragraph1">Let Your Health take the Center Stage. Your Wellness Journey Begins Here.</p>
                    <button className="button1">Sign Up Now
                        {/* <div className="arrow-div"><img src={arrow_right} alt="" className="arrow" /></div> */}
                    </button>
                </div>
                {/* right part */}
                <div className="right">
                    <img src={hero_image} alt="" className="hero-image"/>
                </div>
                
            </div>

            <div className="feature1">
            <div className="heartt">
                <img src={ feature1_img2} alt="" className="img2"/>
            </div>
            <div className="headingfeature">
                <h2>Unlock a World of Wellness: Explore Our Comprehensive Health Solutions</h2>
                <div className="line1"></div>
            </div>
            
             
            
            {/* left part */}
            
            <div className="subpart">
            <div className="left1">
                <ul>
                        <li>
                            <Check className="check"/>
                            <b> Symptom Checker:</b>
                        <span>Assess your health with our precision Symptom Checker.</span>    
                        </li>
                        <li>
                            <Check className="check"/>
                            <b> Medication Tracker:</b>
                        <span>Effortlessly manage your medications for a healthier lifestyle.</span>
                        </li>
                        <li>
                            <Check className="check"/>
                            <b> Medical History Presevation:</b>
                        <span>Securely preserve your health journey with comprehensive medical records.</span>
                        </li>
                        <li>
                            <Check className="check"/>
                            <b> Telehealth Consultations:</b>
                            <span>Experience expert healthcare from the comfort of your home with secure video consultations.</span>
                        </li>
                        <li>
                            <Check className="check"/>
                            <b> Health Education:</b>
                            <span>Empower yourself through a wealth of health knowledge, articles, and interactive content.</span>
                        </li>
                        <li>
                            <Check className="check"/>
                            <b> Discussion Forum(Humans):</b>
                            <span>Connect with a like-minded community, sharing experiences and insights on your health journey.</span>
                        </li>
                        <li>
                            <Check className="check"/>
                            <b> Veterinary Appointment Booking:</b>
                            <span>Book veterinary appointments online, ensuring the well-being of your beloved pets.</span>
                        </li>
                        <li>
                             <Check className="check"/>
                            <b> Discussion Forum(Pets):</b>
                            <span>Join a community dedicated to pets, sharing stories and insights for their health and happiness.</span>
                        </li>
                </ul>
            </div>
            {/* right part */}
            <div className="right1">
                <img src={feature1_img} alt="" className="img-heart"/>
            </div>
            </div>
            </div>
            
        <div className="testi">
            <div><h4>See What Other's Are Saying </h4></div>
            <FontAwesomeIcon icon={faQuoteLeft} className="quoteleft" />
            <div className="step0">
                <div className="step1">
                    <Slider {...settings}>
                        {data.map((d) => (
                            <div key={d.name} className="step2">
                                <div className="step3">
                                    <img src={d.img} alt="" className="image123" />
                                </div>
                                <div className="step4">
                                    <p className="p1">{d.name}</p>
                                    <p className="p2">{d.review}</p>
                                    <button className="button5">Read More</button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <FontAwesomeIcon icon={faQuoteRight} className="quoteright" />
        </div>
        </div>
    );
}

const data = [
  {
    name: `John Morgan`,
    img: `John_Morgan.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Ellie Anderson`,
    img: `Ellie_Anderson.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Nia Adebayo`,
    img: `Nia_Adebayo.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Rigo Louie`,
    img: `Rigo_Louie.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Mia Williams`,
    img: `Mia_Williams.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  
];

export default Landing;
