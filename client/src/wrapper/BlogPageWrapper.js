import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  > .body {
    /* border: 2px solid red; */
    margin: 0 40px;
    width: 80%;
    > .banner {
      height: 350px;
      > img {
        width: 100%;
        height: 100%;
      }
    }
    > .content {
      padding: 20px;
      border: 2px solid green;
      > .heading {
        text-align: center;
      }
      > .details {
        color: gold;
        font-size: 20px;
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
      }
      > .blog {
        line-height: 30px;
        letter-spacing: 1px;
        > span {
          font-family: serif;
          font-size: 32px;
          text-transform: uppercase;
        }
      }
    }
    > .foot {
      display: flex;
      align-items: center;
      justify-content: space-between;
      > .back {
        margin: 10px 0 0 10px;
        button {
          text-transform: uppercase;
          background-color: transparent;
          cursor: pointer;
        }
        margin-right: 20px;
      }
      > .delete {
        cursor: pointer;
        margin: 10px;
      }
    }
  }
`;

export default Wrapper;
