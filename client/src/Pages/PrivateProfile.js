import Container from '../components/Form/Container';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import avatar from '../images/lonely-boy.gif';
import '../App.css';

const PrivateProfile = () => {
  const EditButtonText = 'Edit profile';
  const Username = Cookies.get('username');

  const [link, setLink] = useState(`https://only-gift.herokuapp.com/user/${Username}`);
  const [copySuccess, setCopySuccess] = useState('');

  const inputHandler = (event) => {
    setLink(event.target.value);
  };

  const copy = () => {
    navigator.clipboard.writeText(link);
    setCopySuccess(`Link Copied!`);
  };

  const onSubmit = (event) => {
    event.preventDefault(event);
    event.target.reset();
  };

  return (
    <div className='title_section user_profile_title'>
      <div id='profile-img'>
        <img id='avatar' src={avatar} />
      </div>
      <div id='profile-form' className='userProfile'>
        <div className='profile_pic_section'>
          <h1>Welcome back {Username}!</h1>
        </div>
        <div className='copy_link'>
          <input
            id='link'
            value={`https://only-gift.herokuapp.com/user/${Username}`}
            onChange={inputHandler}
          />
          <button id='btn' onClick={copy} disabled={!link}>
            Share Link
          </button>
          {copySuccess}
        </div>
        <div className='bio_section'>
          {/* Bio placeholder begin */}

          {/* Profile pic placeholder */}
        </div>
        <div>
          <Link to='/login'>
            <button id='btn'>Log Out</button>
          </Link>
          <Link to='/inbox'>
            <button id='btn'>Inbox</button>
          </Link>
          <div id='edit_profile' className='edit_profile_section'>
            <Container id='button' buttonText={EditButtonText} onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateProfile;
