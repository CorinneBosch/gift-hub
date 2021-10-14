import React, { Component } from 'react';
import { LoginUser } from './login';

const Username = Cookies.get('username');

export default class Login extends Component {
  render() {
    return (
      <div>
        <LoginUser />
      </div>
    );
  }
}
