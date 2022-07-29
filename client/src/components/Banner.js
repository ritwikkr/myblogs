import React from "react";
import styled from "styled-components";

function Banner() {
  return (
    <Wrapper>
      <img
        src="https://img.freepik.com/free-photo/toy-bricks-table-with-word-blog_144627-47465.jpg?size=626&ext=jpg"
        alt=""
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
