import React, { useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { Button, Alert, Form, Card, Row } from 'react-bootstrap';
// import 'bootstrap/disc/css/bootstrap.min.css';

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
          window.location = `/${Username}`;
        }
      })
      .catch((error) => {
        alert('Invalid Password or Email');
        console.log(error);
      });
  };

  return (
    <Form onSubmit={onSubmit}>
      <h3>Log In</h3>
      {/* <Row className='mb-3'>
        <Form.Group as={Col} controlId='formGridEmail'>
          <Form.Control type='email' name='email' required onChange={onChange} placeholder='Email' />
        </Form.Group>

        <Form.Group as={Col} controlId='formGridPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
      </Row> */}

      <Row className='mb-3'></Row>
      <Form.Control type='password' name='password' required onChange={onChange} placeholder='Password' />

      <Button type='submit' value='Log In'>
        Log In
      </Button>
    </Form>
  );
};
