import Container from "./form/container.js";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const Gift = [
  { label: "🧁", value: 5 },
  { label: "🍸", value: 12 },
  { label: "🎂", value: 10 },
  { label: "🍩", value: 8 },
  { label: "🍺", value: 15 },
];

const UserProfile = () => {
  const PaymentButtonText = 'Buy me beer';
  const EditButtonText = 'Edit profile';

  const Username = Cookies.get('username');
    // const UserId = Cookies.get('id')

  const [link, setLink] = useState(`https://Heroku/${Username}`);
  const [copySuccess, setCopySuccess] = useState('');

  const inputHandler = (event) => {
    setLink(event.target.value);
  };

  const copy = () => {
    navigator.clipboard.writeText(link);
    setCopySuccess(`${link} Copied!`);
  };

  const onSubmit = (event) => {
    event.preventDefault(event);
    event.target.reset();
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

            {/* Profile pic placeholder end */}
          </div>
          <div className="bio_section">
            {/* Bio placeholder begin */}
          </div>
          < form onSubmit={onSubmit}>
           <div className="container">
            <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-4">
            <Select options={Gift}/>
          </div>
          <div className="col-md-4"></div>
        </div>
        </div>
        </form>
            <div id="payment" className="payment_section">
              <Container
                formType="payment"
                buttonText={PaymentButtonText}
                onSubmit={this.onSubmit}
              />
          </div>
        </div>
      </div>
    );
}

export default UserProfile;
