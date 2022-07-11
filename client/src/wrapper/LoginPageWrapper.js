import styled from "styled-components";

const Wrapper = styled.div`
  border: 2px solid red;
  min-height: calc(100vh - 140px);
  > .background {
  }
  > .login {
    > button {
      text-transform: uppercase;
    }
  }
  > .body {
    border: 2px solid blue;
    width: 30%;
    margin: 30px auto 0;
    padding: 10px;
    > form {
      > .heading {
        margin: 10px 0;
        > h2 {
          text-transform: uppercase;
        }
      }
      > .form-body {
        text-transform: uppercase;
        > .form-content {
          display: flex;
          flex-direction: column;
          > label {
            margin: 10px 0 0 0;
          }
          > input {
            height: 30px;
            padding-left: 10px;
            font-size: 18px;
          }
          > button {
            margin-top: 30px;
            height: 40px;
            text-transform: uppercase;
          }
        }
      }
    }
  }
`;

export default Wrapper;
