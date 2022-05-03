import { connect } from "react-redux";
import { deleteQuestion, fetchQuestion } from "../../actions/question_actions";
import QuestionThread from "./question_thread"

const mapStateToProps = (state,ownProps) => {
  return {
    question: state.entities.questions[ownProps.match.params.questionId],
    questionId: ownProps.match.params.questionId,
    errors: state.errors.session,
    currentUserId: state.session.id
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestion: (question) => dispatch(fetchQuestion(question)),
    deleteQuestion: questionId => dispatch(deleteQuestion(questionId))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(QuestionThread);