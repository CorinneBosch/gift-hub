import React from "react";

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
        <button className="form-control btn btn-primary" type="submit">
          Send
        </button>
      </div>
    </form>
  );
};
export default Form;
