import React, { Component } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const Gift = [
  { label: "🧁 ", value: 5 },
  { label: "🍸", value: 12 },
  { label: "🎂", value: 10 },
  { label: "🍩", value: 8 },
  { label: "🍺", value: 15 },
];

class DropDownEmoji extends Component {
  constructor(props) {
    super(props);
    this.state = {value:""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleChange() {
    this.setState({ value: Gift.value });
    // const giftState = {
    //   value: this.state.value,  
    // };
    // console.log(giftState.value)
  }

  handleSubmit(event) {
    alert('The gift you picked: ');
    event.preventDefault();
    window.location = "/m-form";
  }
  onSubmit = (event) => {
    event.preventDefault(event);
    const giftState = {
      value: this.state.value,  
    };

    console.log(giftState.value);

  };

  render() {
    return (
      < form onSubmit={this.handleSubmit}>
        <div className="container">
          <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <Select options={Gift}  onChange={this.handleChange} />
          </div>
          <div className="col-md-4"></div>
        </div>
        <input type="submit" value="Submit" />
      </div>
      </form>
    );
  }
}

export default DropDownEmoji;


