import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --main-bg: #F5F3E7;
    --header-bg: #5f5325;
    --nav-bg: #A38E40;
    --nav-item: #7e6d32;
    --text-header: #ece6bc;
    --text-para: #f5e37c;
    --nav-active: #7e6d32;
  }

  html {
    font-size: 10px;
    background-color: var(--main-bg);
    overflow: hidden;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    outline: none;
  }

  .container {
    max-width: 1300px;
    width: 95%;
    margin: 0 auto;
    padding-bottom: 4vh;
  }

  .text-link {
    text-decoration: underline;
    font-style: italic;
    color: var(--nav-active);
  }
  /* Smooth Scroll  */
  [data-scrollbar] {
    height: 76.7vh;
    overflow: hidden;
    @media only screen and (max-width: 768px) {
    height: 81.7vh;
  }
    @media only screen and (max-height: 640px) {
    height: 78.7vh;
  }
    .scrollbar-track.scrollbar-track-y {
      z-index: 105;
      background: transparent;
      .scrollbar-thumb-y {
        background: var(--nav-item);
      }
    }
  }

`;

export default GlobalStyles;
