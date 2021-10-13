import React, { Component } from 'react';
// import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Input } from './form/input-field';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    // this.onChangeFirstName = this.onChangeFirstName.bind(this);
    // this.onChangeLastName = this.onChangeLastName.bind(this);
    // this.onChangeUsername = this.onChangeUsername.bind(this);
    // this.onChangeEmail = this.onChangeEmail.bind(this);
    // this.onChangePassword = this.onChangePassword.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
    };
  }

  validate() {
    const validate = Yup.object({
      firstname: Yup.string()
        .min(2, 'First name must be at least 2 characters')
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      lastname: Yup.string()
        .min(2, 'Last name must be at least 2 characters')
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      username: Yup.string()
        .min(4, 'Username must be at least 4 characters')
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Email is invalid')
        .min(6, 'Email must be at least 6 charaters')
        .max(50, 'Email be 50 characters or less')
        .required('Email is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 charaters')
        .max(20, 'Password must below 20 charaters')
        .required('Password is required'),
      // confirmPassword: Yup.string()
      //   .oneOf([Yup.ref('password'), null], 'Password must match')
      //   .required('Confirm password is required'),
    });
  }

  render() {
    return (
      <div>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validate()}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(formik) => (
            <div>
              <h1>Sign Up</h1>
              <Form>
                <Input label='First Name' name='firstName' type='text' />
                <Input label='Last Name' name='lastName' type='text' />
                <Input label='Username' name='username' type='text' />
                <Input label='Email' name='email' type='email' />
                <Input label='Password' name='password' type='password' />
                <Input label='Confirm Password' name='confirmPassword' type='password' />
                <button type='submit'>Register</button>
                <button type='reset'>Reset</button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    );
  }
}
