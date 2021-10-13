import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import UserProfile from './components/user-profile/user-profile.js';
import EditUser from './components/user-profile/edit-user';
// import CreateUser from './components/user-profile/register-user';
import CreateUser from './components/user-profile/test';
import Login from './components/user-profile/login-user';
// import Navbar from './components/navbar.js';
import Messages from './components/messages';
import messageForm from './components/message-form.components.js';
import Form from './components/stripe.components.js';

function App() {
  return (
    <Router>
      <Route path='/register' component={CreateUser} />
      <Route path='/edit/:id' component={EditUser} />
      <Route path='/profile/:userId' component={UserProfile} />
      <Route path='/login' component={Login} />
      <Route path='/messages' component={Messages} />
      <Route path='/m-form' component={messageForm} />
      <Route path='/p-form' component={Form} />
    </Router>
  );
}

export default App;
