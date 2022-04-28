import React from 'react';
import NavBarContainer from './homepage/nav_bar_container';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import SignUpFormContainer from './session_forms/signup_form_container';
import LoginFormContainer from './session_forms/login_form_container';
import { AuthRoute } from '../util/routes_utils';
import HomePage from './homepage/homepage_logged_out';
const App = () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <AuthRoute exact path="/" component={HomePage} />
    <Route path="/login" component={LoginFormContainer}/>
    <AuthRoute path="/signup" component={SignUpFormContainer} />
  </div>
)

export default App;