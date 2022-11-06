import styled from "styled-components";
import { theme } from "../../../theme";

export const UserBox = styled.div`
  height: 100vh;
  width: 300px;
  background: ${theme.dark};
  overflow: auto;
  transition: 0.5s;
  &::-webkit-scrollbar {
    height: 0;
    width: 10px;
    background: ${theme.scrollTrack};
    border: ${theme.hrdark};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${theme.scrollThumb};
  }
  .user {
    height: 80px;
    display: flex;
    padding: 0 10px;
    margin: 5px;
    align-items: center;
    border-radius: 10px;
    cursor: crosshair;
    color: ${theme.textColor};
    transition: 0.3s;
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
      padding: 15px 0;
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
    &:hover {
      background: ${theme.black};
    }
  }
  @media screen and (max-width: 650px) {
    position: absolute;
    left: 80px;
    width: calc(100% - 80px);
    z-index: 5;
  }
`;
