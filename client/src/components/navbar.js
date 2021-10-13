import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Navbar extends Component {
  render() {
    return (
      <div class="container-fluid">
    
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link class="navbar-brand" href="#">
            <img src="" alt="" width="60" height="50" />
          </Link>
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