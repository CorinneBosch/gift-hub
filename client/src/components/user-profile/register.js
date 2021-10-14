import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Input } from './form/input-field';
import axios from 'axios';

export const Register = () => {
  const [user, setUser] = useState([]);

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
      .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field')
      // .matches(/^\s*$/, 'No white spaces allowed in username')
      .matches(/^\S+$/, 'No white spaces allowed in username')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .min(6, 'Email must be at least 6 charaters')
      .max(50, 'Email be 50 characters or less')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 charaters')
      .max(20, 'Password must below 20 charaters')
      // .matches(
      //   /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/,
      //   'Password must contain number, uppercase letter and special character'
      // )
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  });

  const initialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (values) => {
    // e.preventDefault();

    axios
      .post('http://localhost:5000/users/register', values)
      .then((res) => {
        if (res.status == 200) {
          console.log(res.data);
          window.location = '/login';
        } else {
          alert(res.data);
        }
      })
      .catch((err) => {
        if (err.response.status == 401) {
          alert('Please choose different username');
        } else {
          alert(err.message);
        }
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        onSubmit(values);
        // resetForm();
      }}
    >
      {(formik) => (
        <div>
          <h1>Sign Up</h1>
          <Form>
            <Input label='First Name' name='firstname' type='text' placeholder='First Name' />
            <Input label='Last Name' name='lastname' type='text' placeholder='Last Name' />
            <Input label='Username' name='username' type='text' placeholder='Username' />
            <Input label='Email' name='email' type='email' placeholder='someone@gifthub.com' />
            <Input label='Password' name='password' type='password' placeholder='Password' />
            <Input
              label='Confirm Password'
              name='confirmPassword'
              type='password'
              placeholder='Confirm Password'
            />
            <button type='submit'>Register</button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
