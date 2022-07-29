import React, { useReducer, useContext } from "react";
import axios from "axios";

import reducer from "./reducer";
import {
  GET_BLOGS_SUCCESS,
  GET_BLOG_SUCCESS,
  HIDE_ALERT,
  JWT_EXPIRED,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
} from "./actions";

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");

const initialState = {
  blogs: [],
  blog: {},
  user: user ? JSON.parse(user) : null,
  token: token || "",
  showAlert: false,
  alertType: "",
  alertText: "",
  isJwtExpired: false,
  jwtError: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Axios config-------------------------------------
  const authRequest = axios.create({
    baseURL: "/api/v1/auth",
  });

  const blogRequest = axios.create({
    baseURL: "/api/v1/blogs",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // Blogs ---------------------------------------------

  async function getBlogs() {
    try {
      const { data } = await axios.get("/api/v1/blogs");
      dispatch({ type: GET_BLOGS_SUCCESS, payload: { data } });
    } catch (error) {
      console.log(error);
    }
  }

  async function getBlog(id) {
    try {
      const { data } = await axios.get(`/api/v1/blogs/${id}`);
      dispatch({ type: GET_BLOG_SUCCESS, payload: { data } });
    } catch (error) {
      console.log(error);
    }
  }

  async function publish(blog) {
    try {
      const { data } = await blogRequest.post("/publish", blog);
      console.log(data);
    } catch (error) {
      dispatch({ type: JWT_EXPIRED, payload: error.response.data });
      console.log(error);
    }
  }

  async function deleteBlog(blogId) {
    try {
      const { data } = await blogRequest.delete(`/${blogId}`);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  // User Authentication -------------------------------------------

  async function registerUser(userDetails) {
    try {
      const { username, email, password } = userDetails;
      if (!username || !email || !password) {
        dispatch({
          type: REGISTER_USER_ERROR,
          payload: "Please provide all values",
        });
        hideAlert();
        return;
      }
      const { data } = await authRequest.post("/register", userDetails);
      dispatch({ type: REGISTER_USER_SUCCESS, payload: { data } });
      localStorage.setItem("user", JSON.stringify(data.response));
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.log(error);
      dispatch({ type: REGISTER_USER_ERROR, payload: error.response.data });
      hideAlert();
    }
  }

  async function loginUser(userDetails) {
    try {
      const { email, password } = userDetails;
      if (!email || !password) {
        dispatch({
          type: LOGIN_USER_ERROR,
          payload: "Please provide all values",
        });
        hideAlert();
        return;
      }
      const { data } = await authRequest.post("/login", userDetails);
      console.log(data);
      dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
      localStorage.setItem("user", JSON.stringify(data.response));
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.log(error.response.data);
      dispatch({ type: LOGIN_USER_ERROR, payload: error.response.data });
      hideAlert();
    }
  }

  async function logoutUser() {
    console.log(`object`);
    try {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      dispatch({ type: LOGOUT_USER_SUCCESS });
    } catch (error) {
      console.log(error);
    }
  }

  async function forgotPassword(email) {
    try {
      const { data } = await authRequest.post("/forgotPassword", { email });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function resetPassword(passwords) {
    try {
      // console.log(passwords);
      const { data } = await authRequest.post("/resetPassword", passwords);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  // Alert-----------------------------------------------------------------------------

  function hideAlert() {
    setTimeout(() => {
      dispatch({ type: HIDE_ALERT });
    }, 2000);
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        getBlogs,
        getBlog,
        publish,
        deleteBlog,
        registerUser,
        logoutUser,
        loginUser,
        forgotPassword,
        resetPassword,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
