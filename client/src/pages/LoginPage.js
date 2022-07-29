import React, { useState, useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../wrapper/LoginPageWrapper";
import Alert from "../components/Alert";

function LoginPage() {
  const [login, setLogin] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { registerUser, user, loginUser, showAlert } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      navigate("/");
    }
  }, [user]);

  function formHandler(e) {
    e.preventDefault();
    const { username, email, password } = userDetails;
    if (!login) {
      registerUser({ username, email, password });
    } else {
      loginUser({ email, password });
    }
  }
  return (
    <Wrapper>
      <div className="background"></div>
      <div className="login">
        <button onClick={() => setLogin(!login)}>
          {login ? "register" : "login"}
        </button>
      </div>
      <div className="body">
        <form onSubmit={formHandler}>
          {showAlert && <Alert />}
          <div className="heading">
            <h2>{login ? "login" : "register"}</h2>
          </div>
          <div className="form-body">
            {!login && (
              <div className="form-content">
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, username: e.target.value })
                  }
                />
              </div>
            )}
            <div className="form-content">
              <label htmlFor="email">email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
              />
            </div>
            <div className="form-content">
              <label htmlFor="pass">password</label>
              <input
                type="password"
                id="pass"
                placeholder="Enter your password"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
              />
            </div>
            <div className="form-content">
              <button type="submit">{login ? "login" : "register"}</button>
            </div>
          </div>
          {login && (
            <Link to="/forgotPassword">
              <div className="form-content">
                <p>Forgot Password? Click here to Reset</p>
              </div>
            </Link>
          )}
        </form>
      </div>
    </Wrapper>
  );
}

export default LoginPage;
