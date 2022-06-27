import { connect } from "react-redux";
import { updateQuestion } from "../../actions/question_actions"
import QuestionForm from "./question_form";
import { resetQuestionErrors } from "../../actions/question_actions";

const mapStateToProps = (state,ownProps) => {
  return {
    question: state.entities.questions[ownProps.match.params.questionId],
    errors: state.errors.question,
    currentUserId: state.session.id,
    formType: 'edit'
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postQuestion: question => dispatch(updateQuestion(question)),
    resetQuestionErrors: () => dispatch(resetQuestionErrors())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);