import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
const Username = Cookies.get('username');

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.inputEmail = this.inputEmail.bind(this);
    this.inputPassword = this.inputPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  inputEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  inputPassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    console.log(user.email);

    axios
      .post('http://localhost:5000/users/login', user)
      .then((req, res) => {
        if (req.status === 200) {
          Cookies.set('username', `${req.data.user}`);
          Cookies.set('id', `${req.data._id}`);
          console.log(req.data);
          window.location = `/${Username}`;
        } else {
          alert(res.data); // make error visible to user
        }
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({ email: '', password: '' });
  }

  render() {
    return (
      <div>
        <h3>Log In</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <input
              type='email'
              required
              value={this.state.email}
              onChange={this.inputEmail}
              placeholder='Email'
            />
          </div>
          <div>
            <input
              type='password'
              value={this.state.password}
              onChange={this.inputPassword}
              placeholder='Password'
            />
          </div>
          <div>
            <input type='submit' value='Log In' />
          </div>
        </form>
        <p>Not registered yet?</p>
        <Link to='/register'>
          <button>Register</button>
        </Link>
      </div>
    );
  }
}
