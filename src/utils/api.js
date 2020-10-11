import { _getQuestions, _getUsers, _saveNewUser, _saveQuestion, _saveQuestionAnswer } from "./_DATA";

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

// Create New Question
export function saveQuestion(question) {
  return _saveQuestion(question);
}

// Save Answer from user
export function saveAnswer(answer){
  return _saveQuestionAnswer(answer);
}

// Register New User
export function saveNewUser(user) {
  return _saveNewUser(user);
}