import React from 'react';
import HomeContainer from './homepage/home_container';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import SignUpFormContainer from './session_forms/signup_form_container';
import LoginFormContainer from './session_forms/login_form_container';
const App = () => (
  <div>
    <Route path="/login" component={LoginFormContainer}/>
    <Route path="/signup" component={SignUpFormContainer} />
    <Route exact path="/" component={HomeContainer}/>
  </div>
)

export default App;