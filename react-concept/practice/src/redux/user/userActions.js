import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./userTypes";

export const fetchUser = () => async (dispatch) => {
  dispatch({ type: FETCH_USER_REQUEST });

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_USER_FAILURE,
      payload: err.message,
    });
  }
};
