import React from 'react'
import QuestionIndexItem from './question_index_item';
import { Link } from 'react-router-dom';


class QuestionIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    if (this.props.questions) {
      return (
      <div id='index-outer-div'>
        <div id='question-index-container'>
          <div id='questions-header-container'>
            <h1>Questions</h1>
            <Link to="/questions/ask"><button className='ask-question'>Ask Question</button></Link>
          </div>
          <ul id='question-index-list'>
          {this.props.questions.map(question => (
            <QuestionIndexItem question={question}/>
          ))}
          </ul>
        </div>
      </div>
      )
    } else {
      return null;
    }
  }
}

export default QuestionIndex