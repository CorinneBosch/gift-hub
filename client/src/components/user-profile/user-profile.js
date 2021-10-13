import React from "react";
import Container from "./form/container.js";
import axios from "axios";
import Cookies from "js-cookie";

class UserProfile extends React.Component {
  constructor(props) {
    // const [PaymentButtonText, buttonRef, showModal] = React.useState();
    super(props);
    this.state = { value: "coconut" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Your gift is " + this.state.item + " :)");
    event.preventDefault();
  }

  // const UserId = Cookies.get('id')

  onSubmit = (event) => {
    event.preventDefault(event);
    // console.log(event.target.email.value);
    // console.log(event.target.message.value);
  };

  render() {
    const PaymentButtonText = "Buy me beer";
    const EditButtonText = "Edit profile";
    const Username = Cookies.get("username");
    return (
      <div className="title_section user_profile_title">
        <div className="userProfile">
          <div id="edit_profile" className="edit_profile_section">
            <Container buttonText={EditButtonText} onSubmit={this.onSubmit} />
          </div>
          <div className="profile_pic_section">
            <h1>Hello, {Username}</h1>
            {console.log(document.cookie)}
            {/* Profile pic placeholder begin */}

            <h1>This is the Profile picture section</h1>
            <img
              src="https://image.shutterstock.com/image-vector/default-profile-picture-avatar-photo-260nw-1681253560.jpg"
              width="262px"
              alt="this is a placeholder"
              height="262px"
              border-radius="50%"
            />

            {/* Profile pic placeholder end */}
          </div>
          <div className="bio_section">
            {/* Bio placeholder begin */}

            <h1>This is the Bio section</h1>

            {/* Bio pic placeholder begin */}
          </div>

          <form onSubmit={this.handleSubmit}>
            <div id="payment" className="payment_section">
              <Container
                formType="payment"
                buttonText={PaymentButtonText}
                onSubmit={this.onSubmit}
              />
            </div>
            <label>
              Pick your gift:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="3" item="muffin">
                  🧁
                </option>
                <option value="5" item="comartini">
                  🍸
                </option>
                <option value="10" item="donut">
                  🍩
                </option>
                <option value="15" item="cake">
                  🎂
                </option>
                <option value="20" item="beer">
                  🍺
                </option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default UserProfile;
