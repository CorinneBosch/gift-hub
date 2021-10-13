import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Signup } from './register';

export default class CreateUser extends Component {
  render() {
    return (
      <div>
        <Signup />
        <p>Already have an account?</p>
        <Link to='/login'>
          <button>Log In</button>
        </Link>
      </div>
    );
  }
}
