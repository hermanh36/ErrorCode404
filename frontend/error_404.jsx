import React from "react";
import Root from "./components/root";
import ReactDOM from "react-dom";
import configureStore from './store/store'
import * as questionApiUtil from './util/question_api_util'
import * as sessionUtil from './util/session_api_util'

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
  window.createQuestion = questionApiUtil.createQuestion;
  window.fetchQuestion = questionApiUtil.fetchQuestion;
  window.fetchQuestions = questionApiUtil.fetchQuestions;
  window.updateQuestion = questionApiUtil.updateQuestion;
  window.deleteQuestion = questionApiUtil.deleteQuestion;
  const store = configureStore(preloadedState);
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});