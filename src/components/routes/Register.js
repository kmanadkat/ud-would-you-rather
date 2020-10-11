import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Illustration from '../../imgs/bg.png'
import RegisterForm from '../layout/RegisterForm'

class Register extends Component {

  render() {
    return (
      <section className="py-sm-5 pb-5">
        <div className="container px-3">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img src={Illustration} width="95%" alt="Join Us"/>
            </div>
            <div className="col-md-6 mt-4">
              <RegisterForm />
              <div className="mt-4">
                <span>Already have an account? Go back to </span> <Link to="/login" className="link text-decoration-none">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Register