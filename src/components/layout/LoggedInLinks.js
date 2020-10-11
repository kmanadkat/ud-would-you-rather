import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { logoutAuthedUser } from '../../actions/authedUser'

class LoggedInLinks extends React.Component{

  handleLogout = () => {
    this.props.dispatch(logoutAuthedUser());
  }

  render() {
    return (
      <div className="navbar-nav ml-auto">
        <NavLink className="nav-link mx-3" exact to="/">Home</NavLink>
        <NavLink className="nav-link mx-3" to="/add">New Poll</NavLink>
        <NavLink className="nav-link mx-3" to="/leaderboard">Leaderboard</NavLink>
        <button className="btn nav-link mx-3" style={{position: 'relative', bottom:1}} onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }
}

export default connect()(LoggedInLinks)
