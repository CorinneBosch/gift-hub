import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          {/* <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
            <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
          </a> */}
          <Link to="/" className="navbar-brand">ONLYGIFT</Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/signup" className="nav-link">Register</Link>
              </li>
              <li className="navbar-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br/>
      </div>
    );
  }
}