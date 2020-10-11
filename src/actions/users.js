import { saveNewUser } from "../utils/api";

// Action Types
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const CREATE_USER = 'CREATE_USER';

// Action Creators
export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function createUser(user) {
  return {
    type: CREATE_USER,
    user
  }
}

// Thunked Action Creator
export function handleCreateUser(user){
  return (dispatch) => {
    return saveNewUser(user)
    .then((formattedUser) => dispatch(createUser(formattedUser)));
  }
}