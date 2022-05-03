import { connect } from "react-redux";
import { createQuestion } from "../../actions/question_actions"
import QuestionForm from "./question_form";


const mapStateToProps = (state) => {
  return {
    question: {
      title: "",
      body: "",
      numLikes: 0,
      authorId: state.session.id,
      authorUsername: state.entities.users[state.session.id].username
    },
    errors: state.errors.question
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postQuestion: question => dispatch(createQuestion(question))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(QuestionForm);