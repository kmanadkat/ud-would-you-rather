import React from 'react'
import LoggedInLinks from './LoggedInLinks'
import LoggedOutLinks from './LoggedOutLinks'

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand brand-font">Would You Rather !!</span>
        <div className="collapse navbar-collapse">
          {props.authedUser === undefined
          ? <p>Loading...</p>
          : props.authedUser === null
          ? <LoggedOutLinks />
          : <LoggedInLinks />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
