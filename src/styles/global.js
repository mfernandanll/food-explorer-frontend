import { createGlobalStyle } from 'styled-components'
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 16px;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`