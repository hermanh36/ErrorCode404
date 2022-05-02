import React from 'react';
import NavBarContainer from './homepage/nav_bar_container';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import SignUpFormContainer from './session_forms/signup_form_container';
import LoginFormContainer from './session_forms/login_form_container';
import { AuthRoute, ProtectedRoute} from '../util/routes_utils';
import HomePage from './homepage/homepage_logged_out';
import QuestionIndexContainer from './questions/question_index_container';
import QuestionThreadContainer from './questions/question_thread_container';
import { Switch } from 'react-router-dom';
import QuestionFormContainer from './questions/question_form_container';
import LeftNav from './left_nav';
const App = () => (
  <div id='main-container'>
    <Route path="/" component={NavBarContainer} />
    <AuthRoute exact path="/" component={HomePage} />
    <Route path="/login" component={LoginFormContainer}/>
    <AuthRoute path="/signup" component={SignUpFormContainer} />
    <div >
      <div id='left-nav-main-container'><Route exact path="/questions" component={LeftNav} /></div>
      <Switch>
        <Route exact path="/questions/ask" component={QuestionFormContainer} />
        <Route  path="/questions/:questionId" component={QuestionThreadContainer} />
        <Route  path="/questions" component={QuestionIndexContainer}/>
      </Switch>
      <div id='right-nav-main-container'></div>
    </div>
  </div>
)

export default App;