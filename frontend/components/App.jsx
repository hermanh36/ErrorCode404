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
import EditQuestionContainer from './questions/edit-question-container';
const App = () => (
  <div id='main-container'>
    <Route path="/" component={NavBarContainer}  />
    <AuthRoute exact path="/" component={HomePage} />
    <Route path="/login" component={LoginFormContainer}/>
    <AuthRoute path="/signup" component={SignUpFormContainer} />
    <Route path ="/questions" component={LeftNav}/>
      <Switch>
        <ProtectedRoute exact path="/ask" component={QuestionFormContainer} />
        <ProtectedRoute exact path="/:questionId/edit" component={EditQuestionContainer}/>
        <Route  path="/questions/:questionId" component={QuestionThreadContainer} />
        <Route  path="/questions" component={QuestionIndexContainer}/>
      </Switch>
  </div>
)


export default App;