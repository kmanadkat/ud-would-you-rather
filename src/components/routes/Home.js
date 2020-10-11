import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import QuestionsFilter from '../layout/QuestionsFilter'
import UserProfile from '../layout/UserProfile'

class Home extends Component {

  render() {
    if(this.props.loaded === undefined){
      return <p className="text-center mt-4">Loading...</p>
    }
    else if(this.props.authedUser === null){
      return <Redirect to="/login" />;
    }
    const {authedUserDetails, questionIds} = this.props;
    const numAnswers = (Object.keys(authedUserDetails.answers)).length;
    const numQuestions = authedUserDetails.questions.length;

    const answered = this.props.answeredIds;
    const unanswered = questionIds.filter(q => !answered.includes(q))
    return (
      <section className="py-5">
        <div className="container mt-3">
          <div className="row">
            <UserProfile 
              id={authedUserDetails.id} 
              avatarURL={authedUserDetails.avatarURL} 
              name={authedUserDetails.name} 
              questions={numQuestions} 
              answers={numAnswers} />
            <QuestionsFilter 
              authedUser={authedUserDetails} 
              answered={answered} 
              unanswered={unanswered}/>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({users, authedUser, questions}) => {
  const answered = authedUser !== null ? Object.keys(users[authedUser].answers) : [];
  return {
    loaded: true,
    authedUser,
    authedUserDetails: users[authedUser],
    answeredIds: answered.sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    questionIds: Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp),
  }
}

export default connect(mapStateToProps)(Home)