import React from 'react';
import '../styles/AccountSettingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import cam_logo from '../assets/Profile_Dp.webp'

// Functional Component: Setting
const Setting = () => {
  return (
    <div className="account-settings-container">
      <div className="account-settings-header">
        <h2>Account Settings</h2>
      </div>
      
      <div className="account-settings-content">
        <div className="profile-section">
          <div className="profile-image-container">
            <img 
              src={cam_logo}
              alt="Profile" 
              className="profile-image" 
            />
            <div className="profile-badge">
              <span className="badge-icon"><FontAwesomeIcon icon={faCamera} /></span>
            </div>
          </div>
          
          <div className="profile-info">
            <p className="profile-name">Marry Doe</p>   
            <p className="profile-email">Marry@Gmail.Com</p>
          </div>
        </div>
        
        <div className="profile-bio">
          <p>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
        
      </div>
      <hr />
    </div>
  );
};
// Exporting the component
export default Setting;