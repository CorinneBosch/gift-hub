import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <p>Already have an account?</p>
        <Link to='/login'>
          <button>Log In</button>
        </Link>
        <p>Not registered yet?</p>
        <Link to='/register'>
          <button>Register</button>
        </Link>
      </div>
    );
  }
}
