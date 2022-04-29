import React from 'react'
import { Redirect,Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const mapStateToProp = state => ({
  loggedIn: Boolean(state.session.id !== null)
});

const Auth = ({loggedIn, path, exact, component: Component}) => (
  <Route
    path = {path}
    exact = {exact}
    render={props => (
      loggedIn ? <Redirect to="/questions"/> : <Component {...props}/>
    )}
  />
);

const Protected = ({loggedIn, path, exact,  component: Component}) => (
  <Route
    path = {path}
    exact = {exact}
    render={props => (
      loggedIn ? <Component{...props}/> : <Redirect to='/login'/>
    )}
  />
)

export const AuthRoute = withRouter(connect(mapStateToProp)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProp)(Protected));