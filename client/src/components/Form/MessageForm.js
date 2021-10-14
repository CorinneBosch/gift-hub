import React from 'react';

const MessageForm = () => {
  return (
    <form>
      <h1>Display messages here</h1>
      <div>
        <p>Name: flower</p>
        <p>Email: tinymice@example.com</p>
        <p>Message: I just sent you a cup of coffee</p>
      </div>
      <div>
        <p>Name: Shinystar2</p>
        <p>Email: shinystar@example.com</p>
        <p>Message: You are amazing, I just sent you a gift</p>
      </div>
      <div>
        <p>Name: cinderrella</p>
        <p>Email: cindy@example.com</p>
        <p>Message: Hope to see you soon</p>
      </div>
      <button className='form-control btn btn-primary' type='submit'>
        Inbox
      </button>
    </form>
  );
};

export default MessageForm;
