import React from "react";
import Root from "./components/root";
import ReactDOM from "react-dom";
import configureStore from './store/store'

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
  const store = configureStore(preloadedState);
   window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});