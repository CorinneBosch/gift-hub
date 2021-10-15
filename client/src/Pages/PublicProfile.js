import Container from '../components/Form/Container';
import Select from 'react-select';
import avatar from '../images/lonely-boy.gif';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import React, { useState } from 'react';
import Cookies from 'js-cookie';

const Gift = [
  { label: '🧁', value: 5 },
  { label: '🍸', value: 12 },
  { label: '🎂', value: 10 },
  { label: '🍩', value: 8 },
  { label: '🍺', value: 15 },
];

const UserProfile = () => {
  const PaymentButtonText = 'Gift';

  const inputHandler = (event) => {
    setLink(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault(event);
    event.target.reset();
  };

  return (
    <div class='box'>
      <div id='profile-img'>
        <img id='avatar' src={avatar} />
      </div>
      <div id='profile-form' className='userProfile'>
        <div className='profile_pic_section'>
          {/* Profile pic placeholder begin */}
          <h1>Lonely Boy</h1>
        </div>
        <div id='select'>
          {/* Bio placeholder begin */}
          <p>I love drinking pumkin spice latte in space</p>
          {/* Profile pic placeholder end */}
        </div>

        <form id='select' onSubmit={onSubmit}>
          <p>Select a gift below & click Gift to continue</p>
          <Select options={Gift} />
          {/* </form> */}
          {/* <div id='payment' className='payment_section'> */}
          <Container id='btn-gift' formType='payment' buttonText={PaymentButtonText} onSubmit={onSubmit} />
          {/* </div> */}
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
