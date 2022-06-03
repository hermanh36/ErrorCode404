import { connect } from "react-redux";
import { deleteQuestion, fetchQuestion } from "../../actions/question_actions";
import QuestionThread from "./question_thread"
import { createAnswer, deleteAnswer, updateAnswer } from "../../actions/answers_actions";
import { createVote, deleteVote, fetchVote } from "../../actions/votes_action";


const mapStateToProps = (state,ownProps) => {
  return {
    question: state.entities.questions[ownProps.match.params.questionId],
    questionId: ownProps.match.params.questionId,
    errors: state.errors.session,
    currentUserId: state.session.id,
    votes: state.entities.votes
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestion: (question) => dispatch(fetchQuestion(question)),
    deleteQuestion: questionId => dispatch(deleteQuestion(questionId)),
    deleteAnswer: answerId => dispatch(deleteAnswer(answerId)),
    createAnswer: answer => dispatch(createAnswer(answer)),
    updateAnswer: answer => dispatch(updateAnswer(answer)),
    fetchVote: postId => dispatch(fetchVote(postId)),
    createVote: vote => dispatch(createVote(vote)),
    destroyVote: voteId => dispatch(deleteVote(voteId))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(QuestionThread);