import "./App.css";

import UserProfile from "./components/user-profile/user-profile.js";

import { BrowserRouter as Router, Route } from "react-router-dom";
import EditUser from "./components/edit-user.component";
import CreateUser from "./components/create-user.components.js";
import Navbar from "./components/navbar.js";


function App() {
  return (
    <Router>
      < Navbar />
         <Route path="/signup" component={CreateUser} />
         <Route path="/edit/:id" component={EditUser} />
         <Route path="/profile/:userId" component={UserProfile} />
     </Router>
  );
}

export default App;
