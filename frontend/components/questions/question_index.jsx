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
        <div className="question-index-main">
          <div id='question-index-total'>
            {/* <div id='question-index-fake-left-nav'></div> */}
            <div id='index-outer-div'>
              <div id='questions-header-container'>
                <h1>Questions</h1>
                <Link to="/ask"><button className='ask-question'>Ask Question</button></Link>
              </div>
              <div id='question-index-container'>
                <ul id='question-index-list'>
                {this.props.questions.map((question,idx) => (
                  <QuestionIndexItem question={question} key={idx} history={this.props.history}/>
                ))}
                </ul>
              </div>
            </div>
            <div id='question-index-fake-right-nav'></div>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default QuestionIndex