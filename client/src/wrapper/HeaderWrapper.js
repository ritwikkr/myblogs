import styled from "styled-components";

const Wrapper = styled.div`
  height: 80px;
  > .skip {
    position: absolute !important;
    /* overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    width: 1px;
    height: 1px;
    word-wrap: normal; */
  }
  /* > .skip:focus-visible {
    display: block;
  } */
  > .body {
    width: 80%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    > .icons {
      display: flex;
      > .icon {
        font-size: 22px;
        cursor: pointer;
        margin: 0 10px;
      }
    }
    > nav {
      display: flex;
      p {
        margin: 0 10px;
        text-transform: uppercase;
        cursor: pointer;
      }
    }
    > .profile {
      > button {
        cursor: pointer;
        background-color: transparent;
        border: none;
        > img {
          border-radius: 50%;
          width: 40px;
          height: 40px;
        }
      }
    }
  }
`;

export default Wrapper;
