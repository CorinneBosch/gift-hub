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

          {/* Profile pic placeholder begin */}

          <h1>This is the Profile picture section</h1>
          <img src="https://image.shutterstock.com/image-vector/default-profile-picture-avatar-photo-260nw-1681253560.jpg" width='262px' alt='this is a placeholder' height='262px' border-radius='50%'/>
          
          {/* Profile pic placeholder end */}

        </div>
        <div className='bio_section'>

        {/* Bio placeholder begin */}

          <h1>This is the Bio section</h1>

        {/* Bio pic placeholder begin */}

        </div>
        <div className='payment_section'>
          <Container PaymentButtonText={PaymentButtonText} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
