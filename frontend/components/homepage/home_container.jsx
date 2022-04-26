import { connect } from "react-redux";
import { receiveCurrentUser } from "../../actions/session_actions"
import Home from "./home";
import { logout } from "../../actions/session_actions";

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);