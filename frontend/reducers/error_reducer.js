import { combineReducers } from "redux";
import answerErrorReducer from "./answer_error_reducer";
import questionErrorReducer from "./question_error_reducer";
import sessionErrorReducer from "./session_error_reducer";

const errorReducer = combineReducers({
  session: sessionErrorReducer,
  question: questionErrorReducer,
  answer: answerErrorReducer
})

export default errorReducer;