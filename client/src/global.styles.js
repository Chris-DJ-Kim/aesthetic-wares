import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Poppins', sans-serif;
    padding: 20px 120px;
  
    @media screen and (max-width: 800px) {
      padding: 20px;
    }
  }
  
  a {
    text-decoration: none;
    color: black;
  }`;
