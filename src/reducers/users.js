import { ANSWER_QUESTION, CREATE_QUESTION } from "../actions/questions";
import { CREATE_USER, RECEIVE_USERS } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS: 
      return {
        ...state,
        ...action.users
      };
    case ANSWER_QUESTION:
      const  {authedUser, qid, answer} = action.answer;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        } 
      }
    case CREATE_QUESTION:
      const questionId = action.question.id;
      const author = action.question.author;
      return {
        ...state,
        [author] : {
          ...state[author],
          questions: [...state[author].questions, questionId]
        }
      }
    case CREATE_USER:
      return {
        ...state,
        [action.user.id] : action.user
      }
    default:
      return state;
  }
}