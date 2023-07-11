import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
    @font-face { 
        font-family: ogg-roman;
        src: url("https://optimistcreativeindia.com/fonts/Ogg-Family-Web/Ogg-Roman.woff2") format("woff2"),
        url("https://optimistcreativeindia.com/fonts/Ogg-Family-Web/Ogg-Roman.woff") format("woff"); 
    }

    ${normalize}

    :root {
        --color-light: #EEEEEE;
        --color-dark: #121214;
    }

    *,
    ::before,
    ::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        min-height: 100vh;
        scroll-behavior: smooth;
        text-rendering: optimizeSpeed;
        line-height: 1.5;

        font-family: 'Inter', sans-serif;
        font-weight: 500;
        background-color: ${(props) => props.theme.colors.background.default};
        color: ${(props) => props.theme.colors.contrastText};
        letter-spacing: -0.5px;
    }

    ul {
        list-style: none;
    }

    img {
        max-width: 100%;
        display: block;
    }

    a {
        text-decoration: none;
        color: inherit;

        &:focus-visible {
            border-radius: 1px;
            outline: 2px solid blue;
        }
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
        border: none;
        background-color: inherit;
    }
`;

export default GlobalStyle;
