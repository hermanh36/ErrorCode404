import { connect } from "react-redux"
import { fetchAnswers } from "../../actions/answers_actions"
import { fetchQuestions } from "../../actions/question_actions"
import { fetchVote } from "../../actions/votes_action"
import QuestionIndex from "./question_index"


const mapStateToProps = (state) => {
  return {
    questions: Object.values(state.entities.questions),
    votes: state.entities.votes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => dispatch(fetchQuestions()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchVote: (questionId) => dispatch(fetchVote(questionId)),
    fetchAnswers: () => dispatch(fetchAnswers())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(QuestionIndex);