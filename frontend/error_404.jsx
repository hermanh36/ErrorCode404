import React from "react";
import Root from "./components/root";
import ReactDOM from "react-dom";
import configureStore from './store/store'
import * as answerUtil from './util/answer_api_util';


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
  window.createAnswer = answerUtil.createAnswer;
  window.fetchAnswers = answerUtil.fetchAnswers;
  window.fetchAnswer = answerUtil.fetchAnswer;
  window.updateAnswer = answerUtil.updateAnswer;
  window.deleteAnswer = answerUtil.deleteAnswer;
  const store = configureStore(preloadedState);
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});