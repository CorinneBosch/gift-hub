import React from "react";
import StripeCheckout from "react-stripe-checkout";
const KEY =
  "pk_test_51Jj97mFjKtpO9Sxr3ooea52A6mRUwCAMAsFfSmkqQwiLRq2y2krLim9DeUOASuZwBPtYCSXvX5Nj2X3Lf0VfvHKB00r77vAAZ1";

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="name"
          className="form-control gift_form_name"
          id="name"
          placeholder="Enter name here"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control gift_form_email"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Message</label>
        <input
          type="textarea"
          className="form-control gift_form_message"
          id="message"
          placeholder="Drop a message..."
        />
      </div>
      <div className="form-group">
        <StripeCheckout
          name="onlyGifts"
          image=""
          email
          description="Your total is £5"
          amount={500}
          token={onToken}
          stripeKey={KEY}
        >
          <button className="form-control btn btn-primary" type="submit">
            Send
          </button>
        </StripeCheckout>
      </div>
    </form>
  );
};
export default Form;
