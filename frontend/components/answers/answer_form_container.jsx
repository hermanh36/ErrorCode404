import { connect } from "react-redux";
import { createAnswer } from "../../actions/answers_actions"
import { fetchQuestion } from "../../actions/question_actions";
import AnswerForm from "./answer_form";

const mapStateToProps = (state, ownProps) => {
    return {
        answer: {
            author_id: state.session.id,
            body: "",
            question_id: ownProps.question.id,
            num_likes: 0
        },
        question: ownProps.question,
        currentUserId: state.session.id,
        history: ownProps.history,
        errors: state.errors.answer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createAnswer: answer => dispatch(createAnswer(answer)),
        fetchQuestion: questionId => dispatch(fetchQuestion(questionId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AnswerForm)