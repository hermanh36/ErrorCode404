# Welcome to Error404

Error404 is a StackOverflow clone where users are able to signup and make question threads
for others to help them out. Users are able to post answers and share their knowledge
on popular and not so popular bugs across all programs!

## Technology Used

ErrorCode404 incorporates the used of various programming languages and libraries.
These include:
  * PostgreSQL for the database
  * Ruby on Rails for the back-end database management
  * jBuilder to render data to the front end in plain old javascript object(POJO) format
  * jQuery to make ajax calls to the backend to send and pull data
  * Standard javascript with React-Redux library to handle state and
  component loading, as well as selecting specific parts of the DOM
  for conditional rendering.
  * HTML 5 and SCSS for webpage structure and styling
  * Heroku for deployment and live demo

## Features

  * ### User Auth
    Users are required to sign up and login to create questions and answers. A
    demo account is available to use if you do not wish to register on the site.
    There is also site authenticity tokens so that malicious users cannot easily
    launch a CSRF attack. 
    [image placeholder for signup]
    [image placeholder for login]

  * ### Questions
    Users are able to render a question form component when they wish to ask a new
    question. They can also go back to the form to edit their questions. When either
    the question title or body is blank, an error is display before the form and prevent
    the user from submitting the question. If the question was successfully created, users
    will be redirected back to the question index page. Users are also able to delete their post. If
    the question was not created by the user, the edit and delete button is hidden from the user.

    The most time consuming portion of this feature was trying to discover a bug that was causing my errors not to render. It was because of a misplaced parenthesis. Since the total number of parenthesis were the same, there were no visible errors shown in the console. I had to place a debugger waterfall in the
    code to backtrack all my steps, before I finally found the bug.

    ```
      export const createAnswer = answer => dispatch => {
      return (
          answerUtil.createAnswer(answer).then(answer => receiveAnswer(answer),
              err => dispatch(receiveAnswerErrors(err.responseJSON)))
        )
      };
    ```
    The parenthesis placement here was mismatched before I caught the error.

    [image placeholder for question form]
    [image placeholder for question index]
    [image placeholder for question thread]

  * ### Answers
    Users are able to create answers in the same question thread that they are answering 
    without being redirected to an external form. Similar to the question portion, the answers
    can also be editted and deleted. The edit and delete buttons are also hidden if the answers
    were not created by the user. A hidden textbox to edit the form will show when the edit button 
    is clicked under an answer that the user had previously submitted. If the edit box is left empty,
    and submit is clicked, the edit box will close without making any edits. Users are also able to delete their answers.

    A nasty bug here was that since the ``` setState() ``` method was asynchronous, some posts were
    created before the state finished setting. However, because not all post had this behavior, it 
    was difficult to realize that setState was causing the error. This bug only appeared during the initial
    seeded data and not to newly created post, which may imply that ```setState()``` was somehow only running
    slowly on the seeded post. This was fixed by using a callback on the ```submitHandler(e)``` function. I
    ensured that ```setState()``` first ran before anything else did.

    ```
      submitHandler(e) {
        e.preventDefault(); 
        this.props.fetchQuestion(this.props.question.id).then(() => {
          this.setState({ question_id: this.props.question.id }, () => {
            if (!!this.props.currentUserId) {
              this.props.createAnswer(this.state)
                .then(() => this.props.fetchQuestion(this.props.question.id))
                .then(() => this.props.fetchAnswerErrors);
            } else {
              this.props.history.push('/login');
            }
          })
        })
      }
    ```
    [image placeholder for question thread with answers]
    [image placeholder for edit box]

  ### Goals for the future
  
    * Implementing an User index page and an User show page
    * Create a upvote and downvote button for both posts and answers
    * Implement the functionality of the search bar
