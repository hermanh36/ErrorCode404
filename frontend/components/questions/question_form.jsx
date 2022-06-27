import React from 'react';

class QuestionForm extends React.Component {

  constructor(props){
    super(props);
    this.state = this.props.question;
    this.submitHandler= this.submitHandler.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }


  submitHandler(e) {
    e.preventDefault();
    this.props.postQuestion(this.state).then(() => this.props.history.push('/questions'));
  }
  update(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    }
  }
  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error+${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  componentDidMount() {
    this.props.resetQuestionErrors()
  }

  render() {
    if(this.props.currentUserId && this.props.question) {
      if(!this.props.currentUserId === this.props.question.authorId) {
        this.props.history.push(`/questions/${this.props.questionId}`)
      }
    }
    return (
      <div id='question-form-page-background'>
        <div id='question-form'>
          <h1 className='ask-question-title'>Ask A Question</h1>
          <form onSubmit={this.submitHandler}>
            <div id='question-form-container'>
              <h2>Title</h2>
              <label htmlFor='title' >Be specific and imagine you're asking a question to another person</label>
              <input id='question-form-title-input'type="text" name='title' placeholder='e.g. Is there an R function for finding the index of an element in a vector?' value={this.state.title} onChange={this.update('title')}/>
              <h2>Body</h2>
              <label htmlFor="body">Include all the information someone would need to answer your question</label>
              <textarea name="body" cols="30" rows="10" value={this.state.body} onChange={this.update('body')}></textarea>
              <div className='question-errors'>{this.renderErrors()}</div>
            </div>
            <input id='submit-question-btn' type="submit" value="Post Question" />
          </form>
        </div>
      </div>
    )
  }
}

export default QuestionForm;