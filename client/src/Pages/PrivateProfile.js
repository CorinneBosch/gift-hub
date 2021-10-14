import Container from '../components/Form/Container';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../App.css';
import React, { useState } from 'react';
import Cookies from 'js-cookie';

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
      <div className='userProfile'>
        <div className='profile_pic_section'>
          <h1>Hello, {Username}</h1>
          {/* Profile pic placeholder begin */}

          <h1>This is the Profile picture section</h1>
          <img
            src='https://image.shutterstock.com/image-vector/default-profile-picture-avatar-photo-260nw-1681253560.jpg'
            width='262px'
            alt='this is a placeholder'
            height='262px'
            border-radius='50%'
          />
        </div>
        <div className='copy_link'>
          <input value={`https://only-gift.herokuapp.com/user/${Username}`} onChange={inputHandler} />
          <button onClick={copy} disabled={!link}>
            Copy & Share Link
          </button>
          {copySuccess}
        </div>
        <div className='bio_section'>
          {/* Bio placeholder begin */}

          {/* Profile pic placeholder end */}
        </div>
        <div>
          <Link to='/login'>
            <button>Log Out</button>
          </Link>
          <Link to='/inbox'>
            <button>Inbox</button>
          </Link>
          <div id='edit_profile' className='edit_profile_section'>
            <button>
              <Container buttonText={EditButtonText} onSubmit={onSubmit} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateProfile;
