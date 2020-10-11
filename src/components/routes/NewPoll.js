import React, { Component } from 'react'
import NewPollForm from '../layout/NewPollForm'

class NewPoll extends Component {
  render() {
    return (
      <section className="py-5">
        <div className="container mt-4">
          <h3>Create New Poll</h3>
          <hr/>
          <p className="mt-3">You can create a poll of two questions. Once submitted all your friends will be able to answer it. There is no going back, you cannot delete poll once created!</p>
          <div className="d-flex justify-content-center mt-4">
            <NewPollForm />
          </div>
        </div>
      </section>
    )
  }
}
export default NewPoll