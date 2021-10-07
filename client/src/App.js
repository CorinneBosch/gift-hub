import './App.css';
import button from './components/user-profile/user-profile.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* <Route path='/' exact component={UserList} />
      <Route path='/signup' component={CreateUser} /> */}
      <Route path='/profile/username' component={button} />
    </Router>
  );
}

export default App;
