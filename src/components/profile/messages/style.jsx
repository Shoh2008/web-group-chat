import styled from "styled-components";
import { theme } from "../../../theme";

export const ChatBox = styled.div`
  height: 100vh;
  width: calc(100% - 350px);
  background: ${theme.black};
  transition: 0.5s;
  background: url("https://acegif.com/wp-content/uploads/gifs/water-88.gif");
  background-repeat: no-repeat;
  background-size: cover;
  .line-top {
    height: 70px;
    display: flex;
    padding: 0 30px;
    align-items: center;
    border-bottom: ${theme.hrblack};
    color: ${theme.textColor};
    span {
      display: flex;
      font-size: 25px;
      justify-content: center;
      align-items: center;
      height: 60px;
      width: 60px;
      border: ${theme.border};
      border-radius: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      margin: 10px;
      overflow: hidden;
    }
    .title {
      padding: 10px 0;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
    b {
      width: 100%;
    }
    p {
      font-size: 15px;
      color: ${theme.textColor};
    }
    b::first-letter,
    p::first-letter {
      text-transform: uppercase;
    }
  }
  .messages {
    height: calc(100vh - 140px);
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
    align-items: flex-end;
    div {
      margin: 5px;
      display: flex;
      width: 100%;
      align-items: baseline;
    }
    div.title {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: baseline;
      .x-delete {
        width: 20px;
        height: 20px;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${theme.button};
        border: ${theme.border};
      }
    }
    span {
      width: 60%;
      padding: 10px;
      background: #1f1f2499;
      backdrop-filter: blur(30px);
      height: auto;
      color: red;
      align-items: baseline;
      border-radius: 20px;
      p {
        color: ${theme.textColor};
        font-size: 13px;
        margin: 0;
        &::first-letter {
          text-transform: uppercase;
        }
      }
    }
    div.left {
      justify-content: flex-start;
    }
    div.right {
      justify-content: flex-end;
    }
    div.left span {
      text-align: left;
      border-top-left-radius: 0;
    }
    div.right span {
      text-align: right;
      border-top-right-radius: 0;
    }
    &::-webkit-scrollbar {
      height: 0;
      width: 10px;
      background: ${theme.scrollTrack};
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: ${theme.scrollThumb};
    }
  }
  .line-bottom {
    height: 70px;
    display: flex;
    padding: 0 30px;
    align-items: center;
    border-top: ${theme.hrblack};
    button {
      background: ${theme.button};
      border: ${theme.border};
      border-radius: 50px;
    }
    input {
      background: ${theme.input};
      border: ${theme.border};
      color: ${theme.textColor};
      box-shadow: none;
      border-radius: 50px;
      margin: 0 5px;
    }
  }
  @media screen and (max-width: 650px) {
    width: 100% !important;
    .messages {
      span {
        width: 90%;
      }
    }
  }
`;
