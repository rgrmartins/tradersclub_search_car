import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Lobster+Two&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background-color:#1f2d40;
    color:#f5f5f5;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }

  a{
    text-decoration: none;
  }
`;
