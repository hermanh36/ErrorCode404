import { connect } from "react-redux"
import { login } from "../../actions/session_actions"
import LoginForm from "./login_form";
import { resetErrors } from "../../actions/session_actions";


const mapStateToProps = state => {
  return {
    user: {
      username: '',
      email: '',
      password: ''    
    },
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    resetErrors: () => dispatch(resetErrors())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)