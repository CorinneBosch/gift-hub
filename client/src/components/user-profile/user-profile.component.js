import React, { Component } from 'react';
import axios from 'axios';



export default class UserProfile extends Component {
  constructor(props) {
      super(props);
      this.state = {
          active: false,
      };
  this.state = {
    textarea: ''
  };
  }


  toggleClass() {
      const currentState = this.state.active;
      this.setState({ active: !currentState });
  };

  onTextarea(e) {
    this.setState({
      textarea: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    e.target.reset();

    const user = {
      textarea: this.state.textarea
    };

    console.log(user);

    axios
      .post('http://localhost:5000/users/add', user)
      .then((res) => console.log(res.data));
    // window.location = '/';
    this.setState({
      textarea: ''
    });
  }

  render() {
      return (
        <div>  
        <button onClick={this.toggleClass}>
            Buy me beer
          <form onSubmit={this.onSubmit}>
            <input type='textarea' />
            <input type='submit' />
          </form>
        </button>

        </div>
      )
  }
}