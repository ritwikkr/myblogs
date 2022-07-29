import styled from "styled-components";

const Wrapper = styled.div`
  border: 2px solid red;
  min-height: calc(100vh - 140px);
  > .body {
    border: 2px solid blue;
    width: 500px;
    margin: 50px auto 0;
    border-radius: 10px;
    padding: 20px;
  }
`;

export default Wrapper;
