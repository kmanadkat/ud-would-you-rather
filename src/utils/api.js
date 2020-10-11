import { _getQuestions, _getUsers } from "./_DATA";

// For Logging In
export function getUsers() {
  return _getUsers();
}

// For Getting all questions
export function getQuestions() {
  return _getQuestions();
}

// Get Initial Data For Dashboard
export function getInitialData() {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}