import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

/* @import url('https://fonts.googleapis.com/css2?family=Lato&family=Rubik&display=swap'); */

  body, main, div, ul, li, a, p, figure, img, input, button {
    margin: 0;  
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #FBFBF8;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: #333;
  }
`;