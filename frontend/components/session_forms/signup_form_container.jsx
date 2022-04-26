import { connect } from "react-redux";
import SignUpForm from "./signup_form";
import { signup } from "../../actions/session_actions";
const mapStateToProps = () => {
  return {
    user: {
      username: "",
      email: "",
      password: "",
      firstName: "",
      lastName: ""
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: user => dispatch(signup(user))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(SignUpForm);