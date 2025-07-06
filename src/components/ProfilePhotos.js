import React from 'react';
import './ProfilePhotos.css';
import profileMe from '../images/profile_me.jpeg';
import profileMe2 from '../images/profile_me_2.jpeg';

const ProfilePhotos = () => (
  <div className="profile-photos">
    <img src={profileMe2} alt="Profile 2" className="photo photo-back" />
    <img src={profileMe} alt="Profile 1" className="photo photo-front" />
  </div>
);

export default ProfilePhotos; 