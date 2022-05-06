import React from 'react';

class AnswerIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.editHandler = this.editHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.state = this.props.answer
    this.update = this.update.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  componentDidMount() {
    this.props.fetchQuestion(this.props.question.id);    
  }

  editHandler() {
    if (this.props.currentUserId === this.props.answer.authorId) {
      const editMenu = document.getElementById(`edit-answer-container${this.props.answer.id}`)
      editMenu.classList.toggle('edit-hidden');
    }
  }
  submitHandler() {
    const editMenu = document.getElementById(`edit-answer-container${this.props.answer.id}`)
    editMenu.classList.toggle('edit-hidden');
    this.props.updateAnswer(this.state)
    .then(() => this.props.fetchQuestion(this.props.question.id));
  }

  deleteHandler() {
    const answer = this.props.answer
    this.props.deleteAnswer(this.props.answer.id).then(() => {
      this.props.fetchQuestion(this.props.question.id);
    })
  }


  update(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    }
  }
  
  render() {
    if (!this.props.question){
      return null
    } else {
      return (
        <div id='main-answer'>
          <p># upvote</p>
          <div id='main-answer-body'>
            <p>
            {this.props.answer.body}
            </p>
            <div id={`edit-answer-container${this.props.answer.id}`} className='edit-hidden'>
              <label className='edit-answer-label'htmlFor="edit-answer">Edit Your Answer</label>
              <textarea name="edit-answer" className='edit-box'onChange={this.update('body')}id="edit-answer-textarea"></textarea>
              <button onClick={this.submitHandler} className='question-thread-author-edit'>Submit </button>
            </div>
            {(this.props.currentUserId === this.props.answer.authorId) 
            ?
            <div id='answer-buttons-container'>
              <button onClick={this.editHandler} className='question-thread-author-edit'>Edit</button>
              <button onClick={this.deleteHandler} className='question-thread-author-delete'>Delete</button>
            </div>
            :
            <div></div>}
          </div>
        </div>
      )
    }
  }
    
}

export default AnswerIndexItem;