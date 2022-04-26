import React from "react";
import ReactDOM from "react-dom";
import * as Util from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
  window.signup = Util.signup;
  window.login = Util.login;
  window.logout = Util.logout;
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to Error404</h1>, root);
});