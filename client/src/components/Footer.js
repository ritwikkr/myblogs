import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <div className="body">Copyright &copy; 2022-23. All rights reserved</div>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  background-color: lightgray;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
