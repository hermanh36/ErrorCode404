import * as answerUtil from '../util/answer_api_util';

export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS';
export const RECEIVE_ANSWER_ERRORS = 'RECEIVE_ANSWER_ERRORS';
export const REMOVE_ANSWER = 'REMOVE_ANSWER'

const receiveAnswers = () => {
    return {
        type: RECEIVE_ANSWERS,
        answers
    }
};

const receiveAnswer = answer => {
    return {
        type: RECEIVE_ANSWER,
        answer
    }
}

const receiveAnswerErrors = errors => {
    return {
        type: RECEIVE_ANSWER_ERRORS,
        errors
    }
};

const removeAnswer = answerId => {
    return {
        type: REMOVE_ANSWER,
        answerId
    }
}

export const fetchAnswers = () => dispatch => {
    return (
        answerUtil.fetchAnswers().then(answers => dispatch(receiveAnswers(answers)),
        err => dispatch(receiveAnswerErrors(err.responseJSON)))
    )
};

export const fetchAnswer = answerId => dispatch => {
    return (
        answerUtil.fetchAnswer(answerId).then(answer =>dispatch(receiveAnswer(answer)),
            err => dispatch(receiveAnswerErrors(err.responseJSON)))
    )
};

export const createAnswer = answer => dispatch => {
    return (
        answerUtil.createAnswer(answer).then(answer => receiveAnswer(answer),
            err => dispatch(receiveAnswerErrors(err.responseJSON)))
    )
};

export const updateAnswer = answer => dispatch => {
    return (
        answerUtil.updateAnswer(answer).then(answer => receiveAnswer(answer),
            err => dispatch(receiveAnswerErrors(err.responseJSON)))
    )
}

export const deleteAnswer = answerId => dispatch => {
    return (
        answerUtil.deleteAnswer(answerId).then(() => dispatch(removeAnswer(answerId),
            err => receiveAnswerErrors(err.responseJSON)))
    )
}