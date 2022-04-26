import React from 'react';
import HomeContainer from './homepage/home_container';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import SignUpFormContainer from './session_forms/signup_form_container';
import LoginFormContainer from './session_forms/login_form_container';
const App = () => (
  <div>
    Homepage
    <HomeContainer/>
    <Route path="/login" component={LoginFormContainer}/>
    <Route path="/signup" component={SignUpFormContainer} />
  </div>
)

export default App;