import React, { useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

const Username = Cookies.get('username');
const UserId = Cookies.get('id');

export const LoginUser = () => {
  const [user, setUser] = useState([]);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/users/login', user)
      .then((req, res) => {
        if (req.status === 200) {
          Cookies.set('username', `${req.data.user}`);
          Cookies.set('id', `${req.data._id}`);
          // console.log(user);
          window.location = `/profile/${Username}`;
        }
      })
      .catch((error) => {
        alert('Invalid Password or Email');
        console.log(error);
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Log In</h3>
      <div>
        <input type='email' name='email' required onChange={onChange} placeholder='Email' />
      </div>
      <div>
        <input type='password' name='password' required onChange={onChange} placeholder='Password' />
      </div>
      <div>
        <input type='submit' value='Log In' />
      </div>
    </form>
  );
};
