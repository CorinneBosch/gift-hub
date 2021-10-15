// import React from "react";
import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import 'client/src/App.css';

const KEY =
  'pk_test_51Jj97mFjKtpO9Sxr3ooea52A6mRUwCAMAsFfSmkqQwiLRq2y2krLim9DeUOASuZwBPtYCSXvX5Nj2X3Lf0VfvHKB00r77vAAZ1';

export const Form = ({ onSubmit }) => {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post('http://localhost:5000/checkout/payment', {
          tokenId: stripeToken.id,
          amount: 500,
        });
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input type='name' className='form-control gift_form_name' id='name' placeholder='Enter name here' />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Message</label>
        <input
          id='input'
          type='textarea'
          className='form-control gift_form_message'
          id='message'
          placeholder='Drop a message...'
        />
      </div>
      <div className='form-group'>
        <StripeCheckout
          name='onlyGifts'
          image=''
          email
          description='Your total is $5'
          amount={500}
          token={onToken}
          stripeKey={KEY}
        >
          <button id='button' type='submit'>
            Continue to payment
          </button>
        </StripeCheckout>
      </div>
    </form>
  );
};

export default Form;
