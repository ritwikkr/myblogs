import {
  GET_BLOGS_SUCCESS,
  GET_BLOG_SUCCESS,
  HIDE_ALERT,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
  REGISTER_USER_ERROR,
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

  if (action.type === LOGIN_USER_SUCCESS) {
    console.log(action.payload);
    return {
      ...state,
      user: action.payload.response,
      token: action.payload.token,
    };
  }

  if (action.type === LOGOUT_USER_SUCCESS) {
    return {
      ...state,
      user: null,
      token: "",
    };
  }

  // Alert-------------------------------------------------------------------------
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      showAlert: true,
      alertText: action.payload,
      alertType: "error",
    };
  }

  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      showAlert: true,
      alertText: action.payload,
      alertType: "error",
    };
  }

  if (action.type === HIDE_ALERT) {
    return {
      ...state,
      showAlert: false,
    };
  }
}

export default reducer;
