import "./App.css";
import {Link} from 'react-router-dom';
import UserProfile from "./components/user-profile/user-profile.js";

import { BrowserRouter as Router, Route } from "react-router-dom";
import EditUser from "./components/edit-user.component";
import CreateUser from "./components/create-user.components.js";



function App() {
  return (
    <Router>
      <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                  <Link to="/" className="nav-link">Index</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
         <Route path="/signup" component={CreateUser} />
         <Route path="/edit/:id" component={EditUser} />
         <Route path="/profile/:userId" component={UserProfile} />
      </div>
     </Router>
  );
}

export default App;
