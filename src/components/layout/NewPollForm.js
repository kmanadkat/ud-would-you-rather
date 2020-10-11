import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleCreateQuestion } from '../../actions/questions';

class NewPollForm extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    redirect: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newPoll = {
      optionOneText: this.state.optionOne,
      optionTwoText: this.state.optionTwo,
      author: this.props.authedUser
    }
    console.log(newPoll);
    this.props.dispatch(handleCreateQuestion(newPoll));
    this.setState({optionOne: '', optionTwo: '', redirect: true});
  }

  render() {
    if(this.props.loaded === undefined){
      return <p>Loading...</p>
    }
    if(this.props.loaded === true && (this.props.authedUser === null || this.props.authedUser === undefined )){
      return <Redirect to={{pathname:"/login", state: {redirect: '/add'}}} />
    }
    if(this.state.redirect === true){
      return <Redirect to="/" />
    }
    return (
      <form onSubmit={this.handleSubmit} className="w-75 bg-light px-4 py-4">
        <h6>{this.props.authedUsername} Asked Would You Rather:</h6>
        <div className="form-group row mt-4">
          <label htmlFor="optionOne" className="col-sm-2 col-form-label">Option One</label>
          <div className="col-sm-9">
            <input type="text" name="optionOne" value={this.state.optionOne} onChange={this.handleChange} className="form-control" id="optionOne" required />
          </div>
        </div>
        <div className="form-group row mt-4">
          <label htmlFor="optionTwo" className="col-sm-2 col-form-label">Option Two</label>
          <div className="col-sm-9">
            <input type="text" name="optionTwo" value={this.state.optionTwo} onChange={this.handleChange} className="form-control" id="optionTwo" required />
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-dark mt-4" type="submit">Submit</button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = ({authedUser, users}) => {
  return {
    loaded: true,
    authedUser,
    authedUsername : authedUser !== null ? users[authedUser].name : ''
  }
}

export default connect(mapStateToProps)(NewPollForm);