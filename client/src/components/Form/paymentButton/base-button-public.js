import React from 'react';

const PublicButton = ({ buttonText, buttonRef, showModal }) => {
  return (
    <button id='btn-gift' ref={buttonRef} onClick={showModal}>
      {buttonText}
    </button>
  );
};

export default PublicButton;
