import React, { useState } from "react";
import Wrapper from "../wrapper/ForgotPasswordWrapper";
import { useAppContext } from "../context/appContext";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const { forgotPassword } = useAppContext();
  function forgotPasswordHandler(e) {
    e.preventDefault();
    forgotPassword(email);
  }
  return (
    <Wrapper>
      <div className="body">
        <p>Enter your email.</p>
        <form onSubmit={forgotPasswordHandler}>
          <div className="form-content">
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-content">
            <button type="submit">Forgot Password</button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

export default ForgotPassword;
