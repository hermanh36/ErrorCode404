import {RECEIVE_VOTE, RECEIVE_VOTES, RECEIVE_VOTE_ERRORS, REMOVE_VOTE} from '../actions/votes_action';


const voteReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_VOTES:
            if (action.votes){
                newState = Object.values(action.votes);
                return newState;
            } else {
                return {};
            }
        case RECEIVE_VOTE_ERRORS:
            newState = {};
            return newState;
        case RECEIVE_VOTE:
            newState[action.vote.id] = action.vote;
            return newState;
        case REMOVE_VOTE:
            delete newState[action.voteId];
            return newState;
        default:
            return state;
    }
}

export default voteReducer;