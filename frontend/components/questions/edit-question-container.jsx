import { connect } from "react-redux";
import { updateQuestion } from "../../actions/question_actions"
import QuestionForm from "./question_form";


const mapStateToProps = (state,ownProps) => {
  return {
    question: state.entities.questions[ownProps.match.params.questionId],
    errors: state.errors.question,
    currentUserId: state.session.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postQuestion: question => dispatch(updateQuestion(question))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);