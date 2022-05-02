import { connect } from "react-redux";
import { fetchQuestion } from "../../actions/question_actions";
import QuestionThread from "./question_thread"

const mapStateToProps = (state,ownProps) => {
  return {
    question: state.entities.questions[ownProps.match.params.questionId],
    questionId: ownProps.match.params.questionId
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestion: (question) => dispatch(fetchQuestion(question)),
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(QuestionThread);