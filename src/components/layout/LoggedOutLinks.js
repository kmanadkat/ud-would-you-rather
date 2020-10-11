import React from 'react'
import { NavLink } from 'react-router-dom'

function LoggedOutLinks() {
  return (
    <div className="navbar-nav ml-auto">
      <NavLink className="nav-link mx-3" to="/login">Login</NavLink>
      <NavLink className="nav-link mx-3" to="/register">Register</NavLink>
    </div>
  )
}

export default LoggedOutLinks
