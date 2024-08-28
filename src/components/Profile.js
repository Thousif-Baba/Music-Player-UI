import React from 'react';
import { FaSpotify } from "react-icons/fa";
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile">
            <div className='logo-container'>
                <FaSpotify className='logo' />
                <span className='logo-name'>Spotify</span>
            </div>
            <img src="https://res.cloudinary.com/dnqgnmrup/image/upload/v1724740926/Photo_alorxe.jpg" alt="Profile" className="profile-pic" />
        </div>
    );
};

export default Profile;