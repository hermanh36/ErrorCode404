import * as voteUtil from '../util/vote_api_util.jsx';

export const RECEIVE_VOTES = 'RECEIVE_VOTES';
export const RECEIVE_VOTE = 'RECEIVE_VOTE';
export const REMOVE_VOTE = 'REMOVE_VOTE';
export const RECEIVE_VOTE_ERRORS = 'RECEIVE_VOTE_ERRORS'

const receiveVotes = (votes) => {
    return {
        type: RECEIVE_VOTES,
        votes
    }
}

const receiveVote = (vote) => {
    return {
        type: RECEIVE_VOTE,
        vote
    }
}

const removeVote = voteId => {
    return {
        type: REMOVE_VOTE,
        voteId
    }
}

const receiveVoteErr = err => {
    return {
        type: RECEIVE_VOTE_ERRORS,
        err
    }
}

export const fetchVotes = () => dispatch => {
    return (
        voteUtil.fetchVotes().then(() => dispatch(receiveVotes()))
    )
}

export const createVote = vote => dispatch => {
    return (
        voteUtil.createVote(vote).then(vote => dispatch(receiveVote(vote)))
    )
}

export const deleteVote = voteId => dispatch => {
    return (
        voteUtil.destroyVote(voteId).then(() => dispatch(removeVote(voteId)))
    )
}

export const fetchVote = postId => dispatch => {
    return (
        voteUtil.fetchVote(postId).then((vote) => {
            if (Object.values(vote).length > 0) {
                dispatch(receiveVote(vote))
            }
        })
    )
}