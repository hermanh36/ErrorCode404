import * as questionUtils from '../util/question_api_util'

export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const RECEIVE_QUESTION_ERRORS = 'RECEIVE_QUESTION_ERRORS';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';
export const RESET_QUESTION_ERROR = 'RESET_QUESTION_ERROR'

const receiveQuestions = questions => {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
};

const receiveQuestion = question => {
  return {
    type: RECEIVE_QUESTION,
    question
  }
};

const removeQuestion = questionId => {
  return {
    type: REMOVE_QUESTION,
    questionId
  }
}

const receiveQuestionErrors = errors => {
  return {
    type: RECEIVE_QUESTION_ERRORS,
    errors
  }
};

export const resetQuestionErrors = () => {
  return {
    type: RESET_QUESTION_ERROR
  }
}

export const fetchQuestions = () => dispatch => {
  return (
    questionUtils.fetchQuestions()
  .then(questions => dispatch(receiveQuestions(questions)),
  err => dispatch(receiveQuestionErrors(err.responseJSON)))
  );
};

export const fetchQuestion = (questionId) => dispatch => {
  return (
    questionUtils.fetchQuestion(questionId)
      .then(question => dispatch(receiveQuestion(question)),
        err => dispatch(receiveQuestionErrors(err.responseJSON)))
  );
};

export const createQuestion = (question) => dispatch => {
  return (
    questionUtils.createQuestion(question).then(question => dispatch(receiveQuestion(question)),
        err => (dispatch(receiveQuestionErrors(err.responseJSON))))
  );
};

export const updateQuestion = (question) => dispatch => {
  return (
    questionUtils.updateQuestion(question)
      .then(question => dispatch(receiveQuestion(question)),
        err => dispatch(receiveQuestionErrors(err.responseJSON)))
  );
};

export const deleteQuestion = (questionId) => dispatch => {
  return (
    questionUtils.deleteQuestion(questionId)
      .then(() => dispatch(removeQuestion(questionId)),
        err => dispatch(receiveQuestionErrors(err.responseJSON)))
  );
};