import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Coming Soon', cursive;
        color: ${({ theme }) => theme.text};
    }

    *::after,
    *::before {
      box-sizing: border-box;
    }

    body {
        height: max(100%,100vh);
        display: flex;
        justify-content: center;
        background-image: ${({ theme }) => theme.body};
        transition: all 0.25s linear;

        @media only screen and (min-width: 300px) and (max-width: 800px) {
            height: 100%;
        }
    }
`