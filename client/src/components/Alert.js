import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context/appContext";

function Alert() {
  const { alertType, alertText } = useAppContext();
  return (
    <Wrapper>
      <div className="body">
        <p className={alertType}>{alertText}</p>
      </div>
    </Wrapper>
  );
}

export default Alert;

const Wrapper = styled.div`
  border: 2px solid red;
  .body {
    border-radius: 10px;
    padding: 10px;
    height: 40px;
    width: 100%;
    height: 100%;
    background-color: red;
  }
`;
