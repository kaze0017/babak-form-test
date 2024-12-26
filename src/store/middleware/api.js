import { API_BEGAN, API_SUCCESS, API_FAILED } from "../slices/api";

const api =
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    if (action.type !== API_BEGAN) return next(action);
    if (action.type === API_BEGAN) console.log("API Middleware", action);
    next(action);
    try {
      const { url, method, data } = action.payload;
      const { query } = getState().api;
      const queryString = new URLSearchParams(query).toString();
      let fullUrl = queryString ? `${url}?${queryString}` : url;
      const response = await fetch(fullUrl, {
        method,
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      if (response.ok) {
        dispatch({ type: API_SUCCESS, payload: result });
      } else {
        dispatch({ type: API_FAILED, payload: result });
      }
    } catch (error) {
      console.log("API Error", error);
    }
  };

export default api;
