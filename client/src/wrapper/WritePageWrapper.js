import styled from "styled-components";

const Wrapper = styled.div`
  border: 2px solid transparent;
  min-height: calc(100vh - 140px);
  > .body {
    width: 70%;
    margin: 40px auto 0;
    > form {
      > .image {
        height: 200px;
        > img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }
      > .content {
        padding: 20px;
        > .title {
          margin: 10px 0;
          display: flex;
          align-items: center;
          > .icon {
            font-size: 32px;
            color: gray;
            display: flex;
          }
          > input {
            height: 40px;
            width: 100%;
            border: none;
            font-size: 24px;
            margin-left: 20px;
            outline: none;
          }
        }
        > .blog {
          margin-top: 20px;
          > textarea {
            border: none;
            outline: none;
            font-size: 18px;
            color: gray;
            border-style: none;
          }
        }
        > .publish {
          width: 100px;
          height: 40px;
          > button {
            cursor: pointer;
            height: 100%;
            width: 100%;
            text-transform: uppercase;
          }
        }
      }
    }
  }
`;

export default Wrapper;
