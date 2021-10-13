import React, { Component } from 'react';
import axios from 'axios';

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

    console.log(user);

    axios
      .post('http://localhost:5000/users/update' + this.props.match.params.id, user)
      .then((res) => {
        console.log(res.data);
        window.location = '/login';
      })
      .catch((error) => {
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
            <input type='file' value={this.state.profilePicture} onChange={this.updatePicture} />
          </div>
          <div className='form-group edit_bio_section'>
            <div>
              <label htmlFor='textarea'>Update bio</label>
            </div>
            <textarea
              type='text'
              maxlength='249'
              value={this.state.bio}
              onChange={this.updateBio}
              placeholder='Update your bio...'
              className='edit_bio_textarea'
            />
          </div>
          <div className='form-group edit_update_section'>
            <button className='form-control btn btn-primary' type='submit'>
              Update
            </button>
          </div>
        </form>
      </div>
    );
  }
}
