import { RECEIVE_QUESTION_ERRORS, RECEIVE_QUESTION, RESET_QUESTION_ERROR } from "../actions/question_actions";

const questionErrorReducer = (state = [], action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_QUESTION_ERRORS:
      return action.errors;
    case RECEIVE_QUESTION:
      return [];
    case RESET_QUESTION_ERROR:
      return [];
    default:
      return state;
  }
}

export default questionErrorReducer;