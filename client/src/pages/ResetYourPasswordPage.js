import React, { useState } from "react";
import Wrapper from "../wrapper/ResetYourPasswordPage";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/appContext";
function ResetYourPasswordPage() {
  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });
  const { resetPassword } = useAppContext();
  const { id } = useParams();
  function passwordResetHandler(e) {
    e.preventDefault();
    resetPassword({ password, id });
    // console.log({ password, id });
  }
  return (
    <Wrapper>
      <div className="body">
        <form onSubmit={passwordResetHandler}>
          <div className="form-content">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword({ ...password, password: e.target.value });
              }}
            />
          </div>
          <div className="form-content">
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => {
                setPassword({ ...password, confirmPassword: e.target.value });
              }}
            />
          </div>
          <div className="form-content">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

export default ResetYourPasswordPage;
