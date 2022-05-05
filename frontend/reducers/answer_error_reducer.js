import { RECEIVE_ANSWER, RECEIVE_ANSWER_ERRORS } from "../actions/answers_actions";

const answerErrorReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ANSWER_ERRORS:
            return action.errors;
        case RECEIVE_ANSWER:
            return [];
        default: 
            return state;
    }
}

export default answerErrorReducer;