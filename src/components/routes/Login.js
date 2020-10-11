import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setAuthedUser } from '../../actions/authedUser'
import Illustration from '../../imgs/bg.png'

class Login extends Component {
  state = {
    username: '',
  }

  handleChange = (e) => {
    this.setState({username: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {users, dispatch, history} = this.props;
    const userFound = users.filter(user => user === this.state.username);
    if(userFound.length === 0){
      alert("Invalid Username, Please choose one from dropdown!");
    }
    else if(userFound.length === 1){
      dispatch(setAuthedUser(this.state.username));
      return history.push(this.props.location.state === undefined ? '/' : this.props.location.state.redirect);
    }
  }

  render() {
    const {users} = this.props;
    return (
      <section className="py-sm-5">
        <div className="container px-3">
          <div className="row align-items-center">
            <div className="col-md-6 mt-4 text-center">
              <img src={Illustration} width="90%" alt="Join Us"/>
            </div>
            <div className="col-md-6 mt-4">
              <form onSubmit={this.handleSubmit}>
                <h2>Would You Rather !!</h2>
                <p className="text-muted lead mt-3">
                  Not sure with your choices? Lets help you out in easily creating polls &amp; don't forget to invite your friends over!
                </p>
                <div className="mb-4 mt-5">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input 
                    type="text" 
                    list="datalistOptions" 
                    className="form-control mt-1 w-75" 
                    id="username" 
                    placeholder="Type your username..."
                    onChange={this.handleChange}
                    value={this.state.username}
                    required />
                  <datalist id="datalistOptions">
                    {users.map(user => (
                      <option key={user} value={user} />
                    ))}
                  </datalist>
                </div>
                <button type="submit" className="btn btn-dark px-4 my-2">Login</button>
              </form>
              <div className="mt-5">
                <span>Haven't joined us yet?</span> <Link to="/register" className="link text-decoration-none">Register now</Link> <span>its free :)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({users}) => {
  return {
    users: Object.keys(users)
  }
}

export default connect(mapStateToProps)(Login);