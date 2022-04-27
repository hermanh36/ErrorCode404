import React from 'react'
import { Redirect,Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const mapStateToProp = state => ({
  loggedIn: Boolean(state.session.id !== null)
});

const Auth = ({loggedIn, path, component: Component}) => (
  <Route
    path = {path}
    render={props => (
      loggedIn ? <Redirect to="/"/> : <Component {...props}/>
    )}
  />
);

const Protected = ({loggedIn, path, component: Component}) => (
  <Route
    path = {path}
    render={props => (
      loggedIn ? <Component{...props}/> : <Redirect to='/login'/>
    )}
  />
)

export const AuthRoute = withRouter(connect(mapStateToProp)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProp)(Protected));