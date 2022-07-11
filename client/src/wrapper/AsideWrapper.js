import styled from "styled-components";

const Wrapper = styled.div`
  > .about-me,
  > .follow-us {
    width: 250px;
    > .heading {
      > hr {
      }
      margin: 10px 0;
      text-align: center;
      > p {
        text-transform: uppercase;
      }
    }
    > .body {
      text-align: center;
      > img {
        height: 90%;
        width: 90%;
        border-radius: 10px;
        margin-bottom: 20px;
      }
      > .info {
        > p {
          font-size: 15px;
          font-weight: 500;
        }
      }
    }
  }
`;

export default Wrapper;
