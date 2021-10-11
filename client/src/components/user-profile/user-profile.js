import { Component } from "react";
import { GiftButton } from "./gift-button.js";

export default class UserProfile extends Component {
  render() {
    return (
      <div className='container user_profile_container'>
        <div className='title_section user_profile_title'>
          <div className='profile_pic'>
          </div>
          <div className='bio'>
          </div>
          <GiftButton />
        </div>

      </div>
    )
  }
}