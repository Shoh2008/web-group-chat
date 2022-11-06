import styled from "styled-components";
import { theme } from "../../theme";

export const Block = styled.div`
  width: 100%;
  height: 100vh;
  background: ${theme.black};
  color: ${theme.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  background: ${theme.dark};
  width: 300px;
  height: 280px;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  h2 {
    color: ${theme.textColor};
  }
  button {
    width: 100%;
    background: ${theme.button};
    border: ${theme.border};
    height: 45px;
    &:active,
    &:hover,
    &:focus {
      background: ${theme.button};
      border: ${theme.border};
    }
  }
  input {
    background: transparent;
    color: ${theme.textColor} !important;
    border: ${theme.border};
    height: 45px;
    box-shadow: none !important;
    &:hover::placeholder {
      color: ${theme.textColor};
    }
    &:active,
    &:focus {
      background: transparent;
      border: ${theme.border};
    }
  }
  @media screen and (max-width: 650px) {
    width: 100%;
    height: 350px;
    padding: 60px 40px;
  }
`;
