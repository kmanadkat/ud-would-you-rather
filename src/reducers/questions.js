import { ANSWER_QUESTION, CREATE_QUESTION, RECEIVE_QUESTIONS } from "../actions/questions";

export default function questions (state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case CREATE_QUESTION:
      return {
        ...state,
        [action.question.id] : action.question
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.answer.qid] : {
          ...state[action.answer.qid],
          [action.answer.answer]: {
            ...state[action.answer.qid][action.answer.answer],
            votes: state[action.answer.qid][action.answer.answer].votes.concat([action.answer.authedUser])
          }
        }
      }
    default:
      return state;
  }
}