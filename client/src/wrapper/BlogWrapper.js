import styled from "styled-components";

const Wrapper = styled.div`
  /* border: 2px solid red; */
  width: 450px;
  padding: 20px;
  margin: 20px;
  .body {
    /* border: 2px solid green; */
    display: flex;
    align-items: center;
    flex-direction: column;
    > .img {
      /* border: 2px solid green; */
      width: 350px;
      height: 350px;
      > img {
        height: 100%;
        width: 100%;
        border-radius: 10px;
      }
    }
    > .content {
      /* border: 2px solid blue; */
      width: 80%;
      margin-top: 20px;
      text-align: center;
      > .heading {
        > h2 {
          font-size: 20px;
        }
      }
      > .time {
        text-align: center;
        margin: 10px 0;
        > p {
          color: gray;
          font-weight: 700;
          font-size: 13px;
        }
      }
    }
  }
`;

export default Wrapper;
