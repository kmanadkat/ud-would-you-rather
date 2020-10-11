// Action Types
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

// Action Creators
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}