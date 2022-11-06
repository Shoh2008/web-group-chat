import styled from "styled-components";
import { theme } from "./theme";

export const Block = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  scroll-behavior: smooth;
  color: ${theme.textColor};
  user-select: none;
  & {
    background: ${theme.black} !important;
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
`;
