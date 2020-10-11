import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class QuestionCard extends Component {

  render() {
    const {questionId, question, username, answerOption} = this.props;
    const votes1 = question.optionOne.votes.length;
    const votes2 = question.optionTwo.votes.length;
    const freq1 = votes1 + votes2 === 0 ? 0 : Math.floor((votes1 * 100)/(votes1 + votes2));
    const freq2 = votes1 + votes2 === 0 ? 0 : Math.floor((votes2 * 100)/(votes1 + votes2));

    return (
      <div className="card w-75 mx-auto mt-3">
        <h6 className="card-header py-3 px-4">{username} Asked : </h6>
        <div className="card-body py-3 px-4">
          <div className="vote-info">
            <span className="text-muted">{new Date(question.timestamp).toUTCString()}</span>
            <div className="option-one mt-3">
              <p className="card-text mb-1">{question.optionOne.text} ?</p>
              <div className="votes d-flex">
                <div className="progress w-75" style={{height: 32}}>
                  <div 
                    className={`progress-bar ${answerOption === "optionOne" ? 'bg-success' : 'bg-dark'}`} 
                    role="progressbar" 
                    style={{width: `${freq1}%`}}>{freq1}%
                  </div>
                </div>
                <span className="pl-4 lead font-weight-bold">{votes1}</span>
              </div>
            </div>
            <div className="option-two my-3">
              <p className="card-text mb-1">{question.optionTwo.text} ?</p>
              <div className="votes d-flex">
                <div className="progress w-75" style={{height: 32}}>
                  <div 
                    className={`progress-bar ${answerOption === "optionTwo" ? 'bg-success' : 'bg-dark'}`}
                    role="progressbar" 
                    style={{width: `${freq2}%`}}>{freq2}%
                  </div>
                </div>
                <span className="pl-4 lead font-weight-bold">{votes2}</span>
              </div>
            </div>
            {!answerOption && <Link to={`/questions/${questionId}`}>Answer Poll</Link>}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({questions, authedUser, users}, {type, questionId}) => {
  const question = questions[questionId];
  const authedUserDetail = users[authedUser];
  const answerOption = type === "answered" ? authedUserDetail.answers[questionId] : null;
  const username = users[question.author].name;
  return {
    question,
    username,
    answerOption: answerOption
  };
}

export default connect(mapStateToProps)(QuestionCard)
