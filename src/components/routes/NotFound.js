import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="py-5 h-100">
      <div className="container h-100 d-flex flex-column align-items-center justify-content-center">
        <h1 className="display-1 mt-5" style={{fontSize: 204, fontWeight: "bolder", color: "#D7DBDF"}}>404</h1>
        <h1 className="mt-2 font-weight-bold">Page not found!</h1>
        <p className="lead mt-2">It seems we can’t find the page you are looking for.</p>
        <Link to="/" className="mt-4 btn btn-dark px-4 py-2">Back to Home</Link>
      </div>
    </section>
  )
}

export default NotFound
