import { connect } from "react-redux";
import SignUpForm from "./signup_form";
import { signup,login, resetErrors } from "../../actions/session_actions";
import { withRouter } from "react-router-dom";
const mapStateToProps = (state) => {
  return {
    user: {
      username: "",
      email: "",
      password: "",
    },
    errors: state.errors.session
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    resetErrors: () => dispatch(resetErrors())
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(SignUpForm);