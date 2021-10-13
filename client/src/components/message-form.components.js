// import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import axios from "axios";

const KEY =
  "pk_test_51Jj97mFjKtpO9Sxr3ooea52A6mRUwCAMAsFfSmkqQwiLRq2y2krLim9DeUOASuZwBPtYCSXvX5Nj2X3Lf0VfvHKB00r77vAAZ1";

export const Form = ({ onSubmit }) => {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post("http://localhost:5000/checkout/payment", {
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


import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
// import Container from "./form/container.js";
// import { Link } from "react-router-dom";
import axios from "axios";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeMessage(e) {
    this.setState({
      message: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const message = {
      name: this.state.name,
      message: this.state.message,
      email: this.state.email,
    };

    console.log(message.name);

    const PaymentButtonText = "Buy me beer";
    const EditButtonText = "Edit profile";
    // const onSubmit = (event) => {
    //   event.preventDefault(event);
    //   // console.log(event.target.email.value);
    //   // console.log(event.target.message.value);
    // };
    axios
      .post("http://localhost:5000/messages/send", message)
      .then((res) => {
        if (res.status === 200) {
          // console.log(res.data.user);
          console.log(res.data);
          window.location = "/profile";
        } else {
          alert(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({ name: "", email: "", message: "" });
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="name"
            className="form-control gift_form_name"
            id="name"
            value={this.state.name}
            onChange={this.onChangeName}
            placeholder="Enter name here"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control gift_form_email"
            id="email"
            value={this.state.email}
            onChange={this.onChangeEmail}
            placeholder="name@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Message</label>
          <input
            type="textarea"
            className="form-control gift_form_message"
            id="message"
            value={this.state.message}
            onChange={this.onChangeMessage}
            placeholder="Drop a message..."
          />
        </div>
        <button className="form-control btn btn-primary" type="submit">
          SEND
        </button>
      </form>
    );
  }
}
