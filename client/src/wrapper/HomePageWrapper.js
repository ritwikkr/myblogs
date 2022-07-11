import styled from "styled-components";

const Wrapper = styled.div`
  > .body {
    width: 90%;
    margin: auto;
    > .content {
      padding: 20px;
      display: flex;
      > .blogs {
        display: flex;
        flex-wrap: wrap;
      }
      > aside {
      }
    }
  }
`;

export default Wrapper;
