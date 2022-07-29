import styled from "styled-components";

const Wrapper = styled.div`
  border: 2px solid red;
  min-height: calc(100vh - 140px);
  > .body {
    width: 500px;
    margin: 50px auto 0;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 20px;
  }
`;

export default Wrapper;
