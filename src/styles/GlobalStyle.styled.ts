import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Rubik', sans-serif;
        color: ${theme.colors.primary};
    }
`;

export default GlobalStyle;