import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --gray-50: #F6F6F6;
        --gray-100: #E0E0E0;
        --gray-200: #C7C7C7;
        --gray-300: #ADADAD;
        --gray-400: #949494;
        --gray-500: #7A7A7A;
        --gray-600: #616161;
        --gray-700: #474747;
        --gray-800: #2E2E2E;
        --gray-900: #151515;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    html {
        font-size: 62.5%;
        background-color: var(--gray-900);
    }

    html, body {
        scroll-snap-type: y mandatory;
        height: 100%;
        scroll-behavior: smooth; 
    }
    
    button {
      cursor: pointer !important;
    }
`;
