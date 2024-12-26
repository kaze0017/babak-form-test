export const API_BEGAN = "api/apiBegan";
export const API_SUCCESS = "api/apiSuccess";
export const API_FAILED = "api/apiFailed";
export const SET_QUERY = "api/setQuery";

// Action Creators
export const setQuery = (query) => ({
  type: SET_QUERY,
  payload: query,
});

export const loadPeople = (query) => ({
  type: API_BEGAN,
  payload: {
    url: `https://randomuser.me/api/`,
    onSuccess: "api/apiSuccess",
    onError: "api/apiFailed",
  },
});

export const apiSuccess = (data) => ({
  type: API_SUCCESS,
  payload: data,
});

export const apiFailed = (error) => ({
  type: API_FAILED,
  payload: error,
});

//Reducer

const initialState = {
  people: [],
  loading: false,
  error: null,
  query: { results: 100, gender: "male", nat: "us" },
};

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case API_BEGAN:
      return {
        ...state,
        loading: true,
      };
    case "api/apiSuccess":
      return {
        ...state,
        loading: false,
        people: action.payload.results || [], // Assuming `results` is the key in the API response
      };
    case "api/apiFailed":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_QUERY:
      return {
        ...state,
        query: {...state.query, ...action.payload},
      };
    default:
      return state;
  }
}
