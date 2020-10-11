import React from 'react'
import PollAnswerForm from '../layout/PollAnswerForm'

function PollDetail(props) {
  return (
    <section className="py-5">
    <div className="container mt-4">
      <h3>Answer Poll</h3>
      <hr/>
      <p className="mt-3">Help your friends by answering poll questions and move up in the leaderboard!</p>
      <div className="mt-4">
        <PollAnswerForm questionId={props.match.params.question_id} />
      </div>
    </div>
  </section>
  )
}

export default PollDetail
