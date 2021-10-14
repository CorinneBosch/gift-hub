// import React from 'react';
import '../../App.css';
import Container from './form/container.js';
import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const UserProfile = () => {
  const PaymentButtonText = 'Buy me beer';
  const EditButtonText = 'Edit profile';

  const Username = Cookies.get('username');

  const [link, setLink] = useState(`https://Heroku/${Username}`);
  const [copySuccess, setCopySuccess] = useState('');

  const inputHandler = (event) => {
    setLink(event.target.value);
  };

  const copy = () => {
    navigator.clipboard.writeText(link);
    setCopySuccess(`${link} Copied!`);
  };

  // const UserId = Cookies.get('id')

  const onSubmit = (event) => {
    event.preventDefault(event);
    // console.log(event.target.email.value);
    // console.log(event.target.message.value);
  };
  return (
    <div className='title_section user_profile_title'>
      <div className='userProfile'>
        <div id='edit_profile' className='edit_profile_section'>
          <Container buttonText={EditButtonText} onSubmit={onSubmit} />
        </div>
        <div className='profile_pic_section'>
          <h1>Hello, {Username}</h1>
          {console.log(document.cookie)}
          {/* Profile pic placeholder begin */}

          <h1>This is the Profile picture section</h1>
          <img
            src='https://image.shutterstock.com/image-vector/default-profile-picture-avatar-photo-260nw-1681253560.jpg'
            width='262px'
            alt='this is a placeholder'
            height='262px'
            border-radius='50%'
          />

          {/* Profile pic placeholder end */}
        </div>

        <div className='copy_link'>
          <input value={`https://Heroku/${Username}`} onChange={inputHandler} />
          <button onClick={copy} disabled={!link}>
            Copy & Share Link
          </button>
          {copySuccess}
        </div>

        <div className='bio_section'>
          {/* Bio placeholder begin */}

          <h1>This is the Bio section</h1>

          {/* Bio pic placeholder begin */}
        </div>
        <div id='payment' className='payment_section'>
          <Container formType='payment' buttonText={PaymentButtonText} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
