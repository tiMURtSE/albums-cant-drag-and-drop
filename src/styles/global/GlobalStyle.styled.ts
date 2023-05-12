import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face { 
        font-family: ogg-roman;
        src: url("https://optimistcreativeindia.com/fonts/Ogg-Family-Web/Ogg-Roman.woff2") format("woff2"),
        url("https://optimistcreativeindia.com/fonts/Ogg-Family-Web/Ogg-Roman.woff") format("woff"); 
    }

    body { 
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        background-color: ${(props) => props.theme.colors.background.default};
        color: ${(props) => props.theme.colors.contrastText};
    }
`;

export default GlobalStyle;
