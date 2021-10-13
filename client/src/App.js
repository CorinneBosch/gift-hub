import "./App.css";

import UserProfile from "./components/user-profile/user-profile.js";

import { BrowserRouter as Router, Route } from "react-router-dom";
import EditUser from "./components/edit-user.component";
import CreateUser from "./components/create-user.components.js";
import messageForm from "./components/message-form.components.js";
import Navbar from "./components/navbar.js";
import Login from "./components/login.components.js";
import Messages from "./components/messages";

function App() {
  return (
    <Router>
      < Navbar />
         <Route path="/signup" component={CreateUser} />
         <Route path="/edit/:id" component={EditUser} />
         <Route path="/profile/:userId" component={UserProfile} />
        <Route path="/login" component={Login} />
        <Route path="/messages" component={Messages} />
        <Route path="/m-form" component={messageForm} />
    </Router>
  );
}

export default App;
