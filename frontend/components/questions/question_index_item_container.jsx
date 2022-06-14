import QuestionIndexItem from "./question_index_item"
import { connect } from "react-redux"

const mapStateToProps = state => {
    return {
        votes:state.entities.votes
    }
}

export default connect(mapStateToProps,null)(QuestionIndexItem)