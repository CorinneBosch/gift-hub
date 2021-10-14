import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import UserProfile from './components/user-profile/user-profile.js';
import CreateUser from './components/user-profile/register-user';
import Login from './components/user-profile/login-user';
import messageForm from './components/message-form.components.js';
import Navbar from './components/navbar.js';
import Messages from './components/messages';
import Form from './components/stripe.components.js';
import Cookies from 'js-cookie';

const Username = Cookies.get('username');
// const UserId = Cookies.get('id');

function App() {
  return (
    <Router>
      <Navbar />
      <Route path='/register' component={CreateUser} />
      <Route path={`/${Username}`} component={UserProfile} />
      <Route path='/login' component={Login} />
      <Route path='/messages' component={Messages} />
      <Route path='/m-form' component={messageForm} />
      <Route path='/p-form' component={Form} />
    </Router>
  );
}

export default App;
