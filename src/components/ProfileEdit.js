import React, { useState, useEffect } from 'react';
import './ProfileEdit.css';

const ProfileEdit = () => {
  const [profileData, setProfileData] = useState({
    profilePhoto: '',
    age: '',
    weight: '',
    height: '',
    gender: ''
  });

  useEffect(() => {
    // Load profile data from local storage when component mounts
    const storedProfileData = JSON.parse(localStorage.getItem('profileData')) || {};
    setProfileData(storedProfileData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setProfileData({ ...profileData, profilePhoto: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = () => {
    setProfileData({ ...profileData, profilePhoto: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save profile data to local storage
    localStorage.setItem('profileData', JSON.stringify(profileData));
    alert('Profile updated successfully!');
  };

  return (
    <div className='whole1'>
      <div className='editt'><h2 className='editheading'>Edit Profile</h2></div>
      <form onSubmit={handleSubmit}>
        <div className='data'>
          <label htmlFor="profilePhoto">Profile Photo: </label>
          <input type="file" id="profilePhoto" name="profilePhoto" accept="image/*" onChange={handleImageChange} />
          {profileData.profilePhoto && <img src={profileData.profilePhoto} alt="Profile" className='propic1 other' />}
          {profileData.profilePhoto && <button type="button" onClick={handleRemovePhoto} className='login'>Remove</button>}
        </div>
        <div className='data'>
          <label htmlFor="age">Age: </label>
          <input type="text" id="age" name="age" value={profileData.age} onChange={handleChange} />
        </div>
        <div className='data'>
          <label htmlFor="weight">Weight(in kg): </label>
          <input type="text" id="weight" name="weight" value={profileData.weight} onChange={handleChange} />
        </div>
        <div className='data'>
          <label htmlFor="height">Height(in cm): </label>
          <input type="text" id="height" name="height" value={profileData.height} onChange={handleChange} />
        </div>
        <div className='data'>
          <label htmlFor="gender">Gender: </label>
          <select className='temp123' id="gender" name="gender" value={profileData.gender} onChange={handleChange}>
            <option className="stylingoption" value="Male">Male</option>
            <option className="stylingoption" value="Female">Female</option>
            <option className="stylingoption" value="Other">Other</option>
          </select>
        </div>
        <button type="submit" className='login'>Save Changes</button>
      </form>
      <div className="extra"></div>
    </div>
  );
};

export default ProfileEdit;
