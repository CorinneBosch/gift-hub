import React from "react";

const Button = ({buttonText, buttonRef, showModal}) => {
  return (
    <button
      className="btn btn-lg center modal-button"
      ref={buttonRef}
      onClick={showModal}
    >
      {buttonText}
    </button>
  );
};

export default Button;