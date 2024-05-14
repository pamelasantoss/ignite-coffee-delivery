import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme["brown-500"]};
  }

  body {
    background-color: ${props => props.theme["gray-100"]};
    color: ${props => props.theme["brown-500"]};
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1 {
    font-family: "Poetsen One", sans-serif;
    font-weight: 700;
  }
`;