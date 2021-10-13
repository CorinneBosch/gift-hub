import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import UserProfile from './components/user-profile/user-profile.js';
import EditUser from './components/user-profile/edit-user';
import CreateUser from './components/user-profile/register-user';
import Login from './components/user-profile/login-user';
// import Home from './components/home';
import Navbar from './components/navbar.js';
import Messages from './components/messages';

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Route path='/' component={Home} /> */}
      <Route path='/register' component={CreateUser} />
      <Route path='/edit/:id' component={EditUser} />
      <Route path='/profile/:userId' component={UserProfile} />
      <Route path='/login' component={Login} />
      <Route path='/messages' component={Messages} />
    </Router>
  );
}

export default App;
