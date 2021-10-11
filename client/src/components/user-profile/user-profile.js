import React from "react";
import { Container } from "./form/container.js";

const userProfile = () => {
  const PaymentButtonText = "Buy me beer";
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.email.value);
    console.log(event.target.message.value);
  };
  return (
    <div className="userProfile">
      <Container PaymentButtonText={PaymentButtonText} onSubmit={onSubmit} />
    </div>
  );
};

export default userProfile;
