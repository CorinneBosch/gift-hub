import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const Username = Cookies.get('username');
const UserId = Cookies.get('id');

export default class EditUser extends Component {
  constructor(props) {
    super(props);

    this.updatePicture = this.updatePicture.bind(this);
    this.updateBio = this.updateBio.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      profilePicture: '',
      bio: '',
    };
  }

  updatePicture(e) {
    this.setState({
      profilePicture: e.target.value,
    });
  }

  updateBio(e) {
    this.setState({
      bio: e.target.value,
    });
  }

  onChange(e) {
    e.preventDefault();

    const user = {
      profilePicture: this.state.profilePicture,
      bio: this.state.bio,
    };

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

    this.setState({ profilePicture: '', bio: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onChange}>
          <div className='form-group edit_pic_section'>
            <div>
              <label htmlFor='file'>Upload picture</label>
            </div>
            <input type='file' value={this.state.profilePicture} onChange={this.updatePicture} required />
          </div>
          <div className='form-group edit_bio_section'>
            <div>
              <label htmlFor='textarea'>Update bio</label>
            </div>
            <textarea
              type='text'
              maxLength='249'
              required
              value={this.state.bio}
              onChange={this.updateBio}
              placeholder='Update your bio...'
              className='edit_bio_textarea'
            />
          </div>
          <div className='form-group edit_update_section'>
            <button className='form-control btn btn-primary' type='submit'>
              Update Profile
            </button>
          </div>
        </form>
        <Link to={`/${Username}`}>
          <button className='form-control btn btn-primary'>Return to profile</button>
        </Link>
      </div>
    );
  }
}
