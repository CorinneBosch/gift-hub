import React from "react";
import { Container } from "./form/container.js";

const UserProfile = () => {
  const PaymentButtonText = "Buy me beer";
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.email.value);
    console.log(event.target.message.value);
  };
  return (
    <div className='title_section user_profile_title'>
      <div className="userProfile">
        <div className='profile_pic_section'>
          <h1>This is the Profile picture section</h1>
        </div>
        <div className='bio_section'>
          <h1>This is the Bio section</h1>
        </div>
        <div className='payment_section'>
          <Container PaymentButtonText={PaymentButtonText} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
