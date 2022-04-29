import { combineReducers } from "redux";
import questionErrorReducer from "./question_error_reducer";
import sessionErrorReducer from "./session_error_reducer";

const errorReducer = combineReducers({
  session: sessionErrorReducer,
  question: questionErrorReducer
})

export default errorReducer;