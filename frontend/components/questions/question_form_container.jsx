import { connect } from "react-redux";
import { createQuestion } from "../../actions/question_actions"
import QuestionForm from "./question_form";
import { resetQuestionErrors } from "../../actions/question_actions";


const mapStateToProps = (state) => {
  return {
    question: {
      title: "",
      body: "",
      numLikes: 0,
      authorId: state.session.id,
      authorUsername: state.entities.users[state.session.id].username
    },
    errors: state.errors.question,
    formType: 'create'
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postQuestion: question => dispatch(createQuestion(question)),
    resetQuestionErrors: () => dispatch(resetQuestionErrors())
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(QuestionForm);