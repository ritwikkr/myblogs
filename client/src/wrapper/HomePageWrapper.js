import styled from "styled-components";

const Wrapper = styled.div`
  > .body {
    /* border: 2px solid red; */
    width: 90%;
    margin: auto;
    > .content {
      /* border: 2px solid black; */
      padding: 20px;
      display: flex;
      > .blogs {
        /* border: 2px solid green; */
        display: flex;
        flex-wrap: wrap;
      }
      > aside {
      }
    }
  }
`;

export default Wrapper;
