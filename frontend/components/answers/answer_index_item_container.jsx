import { connect } from "react-redux";
import { fetchAnswers } from "../../util/answer_api_util"
import AnswerIndexItem from "./answer_index_item";
import { fetchVote, createVote, deleteVote } from "../../actions/votes_action";

const mapStateToProps = state => {
  return {
    votes: state.entities.votes,
    currentUserId: state.session.id,
  }

}

const mapDispatchToProps = dispatch => {
  return {
    fetchVote: postId => dispatch(fetchVote(postId)),
    createVote: vote => dispatch(createVote(vote)),
    destroyVote: voteId => dispatch(deleteVote(voteId))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(AnswerIndexItem);