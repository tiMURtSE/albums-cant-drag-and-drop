import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
    @font-face { 
        font-family: ogg-roman;
        src: url("https://optimistcreativeindia.com/fonts/Ogg-Family-Web/Ogg-Roman.woff2") format("woff2"),
        url("https://optimistcreativeindia.com/fonts/Ogg-Family-Web/Ogg-Roman.woff") format("woff"); 
    }

    body { 
        font-family: 'Inter', sans-serif;
        font-weight: 500;
    }
`;

export default GlobalStyle;