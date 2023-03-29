import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// light: 300,
// regular: 400,
// medium: 500,

const GlobalStyle = createGlobalStyle`
  ${reset}
  ::root{
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  * {
    box-sizing : border-box;
  }
  body{
    margin: 0;
    display: flex;
    min-width: 320px;
    min-height: 100vh;
    font-family: 'Roboto', sans-serif;
  }
  h1{
    font-size: 2.5rem;
    font-weight: 300;
  }
  h2{
    font-size: 2rem;
    font-weight: 300;
  }
  h3{
    font-size: 1.5rem;
    font-weight: 400;
  }
  h4{
    font-size: 1.25rem;
    font-weight: 400;
  }
  h5{
    font-size: 1rem;
    font-weight: 400;
  }
  h6{
    font-size: 0.875rem;
    font-weight: 500;
  }
  button{
    display: flex;
    flex-direction: row;
    font-size: 0.875rem;
    font-weight: 500;
    border-radius: 5px;
  }
  button:hover{
    cursor: pointer;
  }
  
  caption, figcaption, small{
    font-size: 0.75rem;
    font-weight: 400;
  }
`;

export default GlobalStyle;
