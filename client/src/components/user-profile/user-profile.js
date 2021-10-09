import React from 'react';
import { Container } from './container/container.js';

const userProfile = () => {
  const triggerText = 'Buy me beer';
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.email.value);
    console.log(event.target.message.value);
  };
  return (
    <div className="userProfile">
      <Container triggerText={triggerText} onSubmit={onSubmit} />
    </div>
  );
};

export default userProfile;
