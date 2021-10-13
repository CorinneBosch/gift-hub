import React from "react";
const PaymentButton = ({ PaymentButtonText, buttonRef, showModal }) => {
  return (
    <button
      className="btn btn-lg center modal-button"
      ref={buttonRef}
      onClick={showModal}
    >
      {PaymentButtonText}
    </button>
  );
};
export default PaymentButton;
