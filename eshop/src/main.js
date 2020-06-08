import React from "react";
import ReactDOM from "react-dom";

import Navbar from "../components/Navbar";
import Items from "../components/Items";
//import Users from "../components/Users";

import SignupForm from "../components/SignupForm";

var bootstrapReact = () =>
  ReactDOM.render(<Navbar />, document.getElementById("container"));

window.addEventListener("DOMContentLoaded", bootstrapReact);
//<Navbar isLoggedIn={false} />,
