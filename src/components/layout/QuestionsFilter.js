import React from 'react'
import { Link } from 'react-router-dom';
import QuestionCard from './QuestionCard';

function QuestionsFilter(props) {
  const {answered, unanswered} = props;
  return (
    <div className="col-md-8 pl-5">
      <div className="d-flex justify-content-end">
        <ul className="nav nav-pills mb-4 pb-2" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <a className="nav-link px-4 active" id="pills-unanswered-tab" data-toggle="pill" href="#pills-unanswered" role="tab">
              Unanswered Polls
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link px-4" id="pills-answered-tab" data-toggle="pill" href="#pills-answered" role="tab">
              Answered Polls
            </a>
          </li>
        </ul>
      </div>
      <div className="tab-content w-100" id="pills-tabContent">
        <div className="tab-pane w-100 fade show active" id="pills-unanswered" role="tabpanel">
          {unanswered.length === 0 && <p className="text-center">Yeah! You answered all of them! Create <Link to="/add">new poll</Link> ?</p>}
          {unanswered.map(q => (
            <QuestionCard key={q} questionId={q} type="unanswered" />
            ))}
        </div>
        <div className="tab-pane w-100 fade" id="pills-answered" role="tabpanel">
          {answered.length === 0 && <p>Oops! You have not answered to any polls yet!</p>}
          {answered.map(q => (
            <QuestionCard key={q} questionId={q} type="answered" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default QuestionsFilter;