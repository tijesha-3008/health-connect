import React, { useState, useEffect } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import temp from '../Assets/favicon.png';
import './UserProfile.css';

const UserProfile = () => {
    // const { user } = useAuth0();
    const [bloodPressure, setBloodPressure] = useState('');
    const [result, setResult] = useState('');

    const [heartRate, setHeartRate] = useState('');
    const [result1, setResult1] = useState('');

    const [bloodSugar, setBloodSugar] = useState('');
    const [result2, setResult2] = useState('');

    const handleInputBP = (e) => {
        setBloodPressure(e.target.value);
        checkBloodPressure(e.target.value);
    };

    const handleInputheartRate = (e) => {
        setHeartRate(e.target.value);
        checkHeartRate(e.target.value);
    };

    const handleInputBloodSugar = (e) => {
        setBloodSugar(e.target.value);
        checkBloodSugar(e.target.value);
    };

    const checkBloodPressure = (value) => {
        const bpValue = parseFloat(value);

        if (isNaN(bpValue)) {
            setResult('');
        }
        else if (bpValue < 90) {
            setResult('Low');
        }
        else if (bpValue >= 90 && bpValue <= 120) {
            setResult('Normal');
        }
        else {
            setResult('High');
        }
    };

    const checkHeartRate = (value) => {
        const heartratevalue = parseFloat(value);

        if (isNaN(heartratevalue)) {
            setResult1('');
        }
        else if (heartratevalue < 60)
            setResult1('Low');
        else if (heartratevalue > 100)
            setResult1('High');
        else
            setResult1('Normal');
    };

    const checkBloodSugar = (value) => {
        const bloodsugarvalue = parseFloat(value);

        if (isNaN(bloodsugarvalue)) {
            setResult2('');
        }
        else if (bloodsugarvalue < 100) {
            setResult2('Your blood sugar level is: Normal');
        }
        else if (bloodsugarvalue >= 126) {
            setResult2('You have diabetes');
        }
        else {
            setResult2('You are prediabetic');
        }
    };

    const [profileData, setProfileData] = useState({});

    useEffect(() => {
        // Load profile data from local storage when component mounts
        const storedProfileData = JSON.parse(localStorage.getItem('profileData')) || {};
        setProfileData(storedProfileData);
    }, []);

    return (
        <div className="profile123">
            <div className="supreme">
                <div className="dimaagkharab">
                    <div className="box1">
                        {/* left part of first box */}
                        <div className="leftpart">
                            <h2 className="hiuser"> Hello! </h2>
                            <p className="hipara"> Chart Your Course to Better Health: Unveil Your Personal Profile</p>
                            <Link to="/medical-documents"><button className="login login1">View and Upload your Medical Documents <span><FontAwesomeIcon icon={faCaretRight} className="historyicon" /></span></button></Link>
                        </div>

                        {/* right part of first box */}
                        <div className="rightpart">
                            <img src="home-about.svg" alt="" className="firstcardimage" />
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="card2">
                            <h4 className="headingcardbp">Blood Pressure Checker</h4>
                            <label className="bp">
                                Enter your blood pressure (mmHg):
                                <input className="inputbox"
                                    type="number"
                                    value={bloodPressure}
                                    onChange={handleInputBP}
                                />
                            </label>
                            {result && <p className="displayresult">Your blood pressure is: {result} </p>}
                        </div>

                        <div className="card2">
                            <h4 className="headingcardbp">Heart Rate Checker</h4>
                            <label className="bp">
                                Enter your heart rate (bpm):
                                <input className="inputbox"
                                    type="number"
                                    value={heartRate}
                                    onChange={handleInputheartRate}
                                />
                            </label>
                            {result1 && <p className="displayresult">Your heart rate is: {result1} </p>}

                        </div>

                        <div className="card2">
                            <h4 className="headingcardbp">Blood Sugar Level Checker</h4>
                            <label className="bp">
                                Enter your fasting blood sugar level (mg/dL):
                                <input className="inputbox"
                                    type="number"
                                    value={bloodSugar}
                                    onChange={handleInputBloodSugar}
                                />
                            </label>
                            {result2 && <p className="displayresult"> {result2} </p>}

                        </div>
                    </div>
                </div>

                <div className="userpanel">
                    {/* include profile */}
                    <div className="photo">
                        {profileData.profilePhoto ? (
                            <img src={profileData.profilePhoto} alt="Profile" className="propic" />
                        ) : (
                            <img src={temp} alt="Default Profile" className="propic" />
                        )}
                    </div>
                    <div>
                        <Link to="/edit-profile"><button className="login editbutton">Edit Your Profile <span><FontAwesomeIcon icon={faCaretRight} className="historyicon" /></span></button></Link>
                    </div>
                    <div className="info">
                        <label>Age: </label>
                        <span className="val">{profileData.age}</span>
                    </div>
                    <div className="info">
                        <label>Weight (in kg): </label>
                        <span className="val">{profileData.weight}</span>
                    </div>
                    <div className="info">
                        <label>Height (in cm): </label>
                        <span className="val">{profileData.height}</span>
                    </div>
                    <div className="info">
                        <label>Gender:</label>
                        <span className="val">{profileData.gender}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
