import { RECEIVE_ANSWER,RECEIVE_ANSWERS, REMOVE_ANSWER } from "../actions/answers_actions";

const answerReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ANSWERS:
            newState = Object.values(action.answers);
            return newState;
        case RECEIVE_ANSWER:
            newState[action.answer.id] = action.answer;
            return newState;
        case REMOVE_ANSWER:
            delete newState[action.answerId];
            return newState;
        default:
            return state;
    }
}

export default answerReducer;