import styled from "styled-components";
import { theme } from "../../theme";

export const Style = styled.div`
  background: ${theme.dark};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .spinner {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background: transparent;
    border: ${theme.spinnerBorderLine};
    border-top-color: ${theme.loaderBorder};
    border-bottom-color: ${theme.loaderBorder};
    -webkit-animation: 1s spin linear infinite;
    animation: 1s spin linear infinite;
  }
  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
