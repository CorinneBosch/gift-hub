import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const Username = Cookies.get('username');
const UserId = Cookies.get('id');

const EditForm = () => {
  const [user, setUser] = useState({ profilePicture: '', bio: '' });

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:5000/users/update/${UserId}`, user)
      .then((res) => {
        if (res.status === 200) {
          console.log('Successfuly updated profile');
          window.location = `/${Username}`;
        }
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='file'>Upload picture</label>
      <input type='file' name='profilePicture' onChange={onChange} required />
      <textarea
        type='text'
        name='bio'
        maxLength='249'
        required
        onChange={onChange}
        placeholder='Update your bio...'
        className='edit_bio_textarea'
      />
      <button className='form-control btn btn-primary' type='submit'>
        Update Profile
      </button>
    </form>
  );
};

export default EditForm;
