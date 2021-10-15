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
      <h1 id='center'>Edit Profile</h1>
      <textarea
        type='text'
        name='bio'
        maxLength='249'
        required
        onChange={onChange}
        placeholder='Update your bio...'
        id='input-6'
      />
      <div>
        {/* <input type='file' name='file' id='file' class='inputfile' /> */}
        {/* <label for='file'>Upload picture</label> */}
        <input
          // id='button'
          type='file'
          name='profilePicture'
          // name='file'
          id='file'
          class='inputfile'
          onChange={onChange}
          required
        />
        <label for='file'>Upload picture</label>
      </div>
      <button id='edit-btn' type='submit'>
        Update
      </button>
    </form>
  );
};

export default EditForm;
