import { connect } from "react-redux"
import { fetchQuestions } from "../../actions/question_actions"
import QuestionIndex from "./question_index"


const mapStateToProps = (state) => {
  return {
    questions: Object.values(state.entities.questions)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => dispatch(fetchQuestions()),
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(QuestionIndex);