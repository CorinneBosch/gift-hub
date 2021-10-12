import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import UserProfile from './components/user-profile/user-profile.js';
import EditUser from './components/user-profile/edit-user';
import CreateUser from './components/user-profile/register-user';
import Login from './components/user-profile/login-user';

function App() {
  return (
    <Router>
      <Route path='/register' component={CreateUser} />
      <Route path='/edit/:id' component={EditUser} />
      <Route path='/profile/:userId' component={UserProfile} />
      <Route path='/login' component={Login} />
    </Router>
  );
}

export default App;
