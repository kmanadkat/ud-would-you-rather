import { saveAnswer, saveQuestion } from "../utils/api";

// Action Types
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const CREATE_QUESTION = 'CREATE_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

// Action Creators
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function createQuestion(question) {
  return {
    type: CREATE_QUESTION,
    question
  };
}

export function answerQuestion(answer) {
  return {
    type: ANSWER_QUESTION,
    answer
  }
}

// Thunked Action Creator
export function handleCreateQuestion(question) {
  return (dispatch) => {
    return saveQuestion(question)
    .then(formattedQuestion => dispatch(createQuestion(formattedQuestion)));
  }
}

export function handleAnswerQuestion(answer) {
  return (dispatch) => {
    return saveAnswer(answer)
    .then(() => dispatch(answerQuestion(answer)));
  }
}