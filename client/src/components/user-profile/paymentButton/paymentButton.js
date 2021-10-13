import React from "react";
const PaymentButton = ({ PaymentButtonText, buttonRef }) => {
  return (
    <button
      className="btn btn-lg center modal-button"
      ref={buttonRef}
      onClick={}
    >
      {PaymentButtonText}
    </button>
  );
};
export default PaymentButton;
