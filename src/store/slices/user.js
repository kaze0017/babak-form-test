// Actions
const USER_SAVED = "user/userSaved";

// Action Creators
// Action Creators
export const saveUser = (user) => ({
  type: USER_SAVED,
  payload: user,
});

// Reducer
const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_SAVED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
