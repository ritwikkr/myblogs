import {
  GET_BLOGS_SUCCESS,
  GET_BLOG_SUCCESS,
  LOGOUT_USER_SUCCESS,
  REGISTER_USER_SUCCESS,
} from "./actions";

function reducer(state, action) {
  if (action.type === GET_BLOGS_SUCCESS) {
    return {
      ...state,
      blogs: action.payload.data,
    };
  }
  if (action.type === GET_BLOG_SUCCESS) {
    return {
      ...state,
      blog: action.payload.data,
    };
  }

  // User Auth----------------------------------

  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      user: action.payload.data.response,
      token: action.payload.data.token,
    };
  }

  if (action.type === LOGOUT_USER_SUCCESS) {
    return {
      ...state,
      user: null,
      token: "",
    };
  }
}

export default reducer;
