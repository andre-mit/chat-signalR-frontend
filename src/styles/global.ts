import { createGlobalStyle } from "styled-components";

import dark from "./themes/dark";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: ${dark.colors.background};
        font-size: 14px;
        color: ${dark.colors.text};
        font-family: sans-serif;
    }
`;
