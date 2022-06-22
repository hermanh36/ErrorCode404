import * as ApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RESET_SESSION_ERRORS = 'RESET_SESSION_ERRORS'

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const resetErrors = () => {
  return {
    type:RESET_SESSION_ERRORS
  }
}

export const login = (user) => dispatch => {
  return (
    ApiUtil.login(user).then(user => dispatch(receiveCurrentUser(user)),
    err => (dispatch(receiveErrors(err.responseJSON))))
  )
};

export const logout = () => dispatch => {
  return (
    ApiUtil.logout().then( user => dispatch(logoutCurrentUser()),
    err => (dispatch(receiveErrors(err.responseJSON))))
  )
};

export const signup = (user) => dispatch => {
  return (
    ApiUtil.signup(user).then(user => (dispatch(receiveCurrentUser(user))),
    err => (dispatch(receiveErrors(err.responseJSON))))
  )
};
