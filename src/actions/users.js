// Action Types
export const RECEIVE_USERS = 'RECEIVE_USERS'

// Action Creators
export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}