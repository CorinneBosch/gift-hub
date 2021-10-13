import React, { Component } from 'react';

export default class FlavorForm extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
      alert('The gift you picked: ' + this.state.value);
      event.preventDefault();
      window.location = "/m-form";
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
              Pick your gift:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="🧁 $3">
                  🧁 
                </option>
                <option value="🍸 $5">
                🍸
                </option>
                <option value="🍩 $8">
                  🍩
                </option>
                <option value="🎂 $10">
                  🎂
                </option>
                <option value="🍺 $12">
                  🍺
                </option>
              </select>
            </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }