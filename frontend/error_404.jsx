import React from "react";
import Root from "./components/root";
import ReactDOM from "react-dom";
import configureStore from './store/store'
import * as questionAction from './actions/question_actions';
import * as sessionUtil from './util/session_api_util';
import * as questionApi from './util/question_api_util';


document.addEventListener("DOMContentLoaded", () => {

  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: {
          [window.currentUser.id] : window.currentUser
        }
      },
      session: {
        id: window.currentUser.id
      }
    }
  }
  window.createUser = sessionUtil.signup;
  window.createQuestion = questionAction.createQuestion;
  window.fetchQuestion = questionAction.fetchQuestion;
  window.fetchQuestions = questionAction.fetchQuestions
  window.updateQuestion = questionAction.updateQuestion;
  window.deleteQuestion = questionAction.deleteQuestion;
  window.ajaxFetchQuestions = questionApi.fetchQuestions;
  const store = configureStore(preloadedState);
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});