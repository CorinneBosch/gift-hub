import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import UserProfile from "./Components/ProfileUser.js";
import CreateUser from "./Components/RegisterUser";
import Login from "./Components/LoginUser";
// import messageForm from "./Components/NotUsedMessageForm.js";
import Navbar from "./Components/Navbar.js";
import Messages from "./Components/Messages";
import Form from "./Components/Stripe.js";
import Cookies from "js-cookie";

const Username = Cookies.get("username");
// const UserId = Cookies.get('id');

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/register" component={CreateUser} />
      <Route path={`/${Username}`} component={UserProfile} />
      <Route path="/login" component={Login} />
      <Route path="/messages" component={Messages} />
      {/* <Route path="/m-form" component={messageForm} /> */}
      <Route path="/p-form" component={Form} />
    </Router>
  );
}

export default App;
