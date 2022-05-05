import { combineReducers } from "redux";
import answerReducer from "./answer_reducer";
import questionsReducer from "./questions_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  questions: questionsReducer,
  answers: answerReducer
});

export default entitiesReducer;