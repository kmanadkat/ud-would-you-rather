import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAnswerQuestion } from '../../actions/questions'

class PollAnswerForm extends Component {
  state = {
    checkedOption: '',
    redirect: false
  }

  handleChange = (e) => {
    this.setState({checkedOption: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.checkedOption === ''){
      alert("Please choose one of the options!")
      return;
    }
    const answerObj = {
      authedUser: this.props.authedUser,
      qid: this.props.questionId,
      answer: this.state.checkedOption
    }
    this.props.dispatch(handleAnswerQuestion(answerObj));
    this.setState({checkedOption: '', redirect: true})
  }

  render() {
    if(this.props.loaded !== true) {
      return <p className="text-center">Loading...</p>;
    }
    if(this.props.loaded === true && (this.props.authedUser === null || this.props.authedUser === undefined)) {
      return <Redirect to={{pathname: "/login", state: {redirect: `/questions/${this.props.questionId}`}}} />;
    }
    if(this.props.loaded === true && (this.props.question === undefined || this.props.question === null)){
      return <Redirect to="/notfound" />
    }
    if(this.state.redirect === true){
      return <Redirect to="/" />;
    }
    const {question, username, userpic} = this.props;
    const votes1 = question.optionOne.votes.length + (this.state.checkedOption === "optionOne" ? 1 : 0);
    const votes2 = question.optionTwo.votes.length + (this.state.checkedOption === "optionTwo" ? 1 : 0);;
    const freq1 = votes1 + votes2 === 0 ? 0 : Math.floor((votes1 * 100)/(votes1 + votes2));
    const freq2 = votes1 + votes2 === 0 ? 0 : Math.floor((votes2 * 100)/(votes1 + votes2));

    return (
      <div className="card w-75 mx-auto mt-3">
        <h6 className="card-header py-3 px-4">{username} Asked Would You Rather: </h6>
        <div className="card-body py-3 px-4 d-flex align-items-center">
          <div className="pr-3">
            <img src={userpic} height="80" alt={username}/>
          </div>
          <div className="vote-info pl-3 w-100 border-left">
            <span className="text-muted">{new Date(question.timestamp).toUTCString()}</span>
            <form onSubmit={this.handleSubmit}>
              <div className="option-one mt-3">
                <p className="card-text mb-1">{question.optionOne.text} ?</p>
                <div className="votes d-flex">
                  <input 
                    id="exampleRadios1"
                    type="radio"
                    name="exampleRadios"
                    className="form-check-input"
                    onChange={this.handleChange}
                    checked={this.state.checkedOption === "optionOne"}
                    value="optionOne" />
                  <div className="progress w-75 ml-3" style={{height: 32}}>
                    <div 
                      className={`progress-bar bg-${this.state.checkedOption === "optionOne" ? 'success' : 'dark'}`}
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
                  <input 
                    id="exampleRadios2"
                    type="radio"
                    name="exampleRadios"
                    className="form-check-input"
                    onChange={this.handleChange}
                    checked={this.state.checkedOption === "optionTwo"}
                    value="optionTwo" />
                  <div className="progress w-75 ml-3" style={{height: 32}}>
                    <div 
                      className={`progress-bar bg-${this.state.checkedOption === "optionTwo" ? 'success' : 'dark'}`}
                      role="progressbar" 
                      style={{width: `${freq2}%`}}>{freq2}%
                    </div>
                  </div>
                  <span className="pl-4 lead font-weight-bold">{votes2}</span>
                </div>
              </div>
              <button className="btn btn-success mt-4" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = ({questions, authedUser, users}, {questionId}) => {
  const question = questions[questionId];
  const username = question ? users[question.author].name : '';
  const userpic = question ? users[question.author].avatarURL : '';
  return {
    loaded: true,
    question,
    username,
    authedUser,
    userpic
  };
}


export default connect(mapStateToProps)(PollAnswerForm);