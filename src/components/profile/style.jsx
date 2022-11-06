import styled from "styled-components";
import { theme } from "../../theme";

export const Block = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  background: ${theme.black};
  .menu {
    display: flex;
    transition: 0.5s;
    z-index: 5;
  }
  .menuBtn {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    border-radius: 50px;
    margin: 5px;
    z-index: 10;
    border: ${theme.border};
    background: ${theme.button};
  }
  button.signin {
    background: ${theme.button} !important;
    border: ${theme.border};
    position: absolute;
    width: 90%;
    font-size: 13px;
    height: 40px;
    bottom: 10px;
    left: 5px;
    z-index: 10;
  }
  button.signinOUT {
    background: ${theme.button} !important;
    border: ${theme.border};
    position: absolute;
    font-size: 13px;
    height: 40px;
    bottom: 10px;
    left: 5px;
    z-index: 10;
  }
  @media screen and (max-width: 650px) {
    .menu {
      position: absolute;
      margin-left: -380px;
      width: 100%;
    }
  }
`;

export const NavBar = styled.div`
  height: 100vh;
  width: 80px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  background: ${theme.black};
  color: ${theme.textColor};
  position: relative;
  [data-title]:hover:after {
    visibility: visible;
  }

  [data-title]:after {
    content: attr(data-title);
    background: ${theme.dark};
    color: ${theme.textColor};
    font-size: 20px;
    border: ${theme.border};
    position: absolute;
    top: 40px;
    left: 40px;
    padding: 4px 8px;
    visibility: hidden;
  }
  .profile {
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
    cursor: crosshair;
  }
  .name {
    color: ${theme.textColor};
    font-size: 40px;
    transform: rotate(-90deg) translate(200px, -70px);
  }
`;
