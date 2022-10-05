import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Coming Soon', cursive;
    }

    body {
        height: 100vh;
        display: flex;
        justify-content: center;
        color: #003049;
        background-image linear-gradient(-20deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%);
    }
`