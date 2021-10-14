import React from 'react';

const Button = ({ buttonText, buttonRef, showModal }) => {
  return (
    <button id='btn' ref={buttonRef} onClick={showModal}>
      {buttonText}
    </button>
  );
};

export default Button;
