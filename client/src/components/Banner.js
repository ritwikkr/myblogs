import React from "react";
import styled from "styled-components";

function Banner() {
  return (
    <Wrapper>
      <div className="display">
        <h1>blogs</h1>
      </div>
      <img
        src="https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
        alt="banner"
      />
    </Wrapper>
  );
}

export default Banner;

const Wrapper = styled.div`
  height: 300px;
  width: 100%;
  position: relative;
  > .display {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    justify-content: center;
    > h1 {
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
      font-weight: 400;
      text-transform: uppercase;
      font-size: 64px;
    }
  }
  > img {
    height: 100%;
    width: 100%;
  }
`;
