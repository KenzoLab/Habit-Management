import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --font-fira: 'Fira Sans', sans-serif;
    --font-inter: 'Inter', sans-serif;
    --darkBlue: #081140;
    --blue: #52B5F2;
    --lightBlue: #72C1F1;
    --darkGreen: #124F72;
    --green: #11995E;
    --gray: #9398A2;
    --lightGray: #DEDEDE;
    --yellow: #FABD59;
    --lightYellow: #FFCF81;
    --black: #000000;
    --whiteSmoke: #FBFBF8
    --white: #FFFFFF;
    --red: #DC1F1F;

  } 

  body {
    background: var(--white);
    color: var(--gray);
  }

  body, input, button, p {
    font-family: 'Inter', sans-serif; 
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;
