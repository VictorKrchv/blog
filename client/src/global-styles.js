import { createGlobalStyle } from "styled-components";
import {defaultColors} from "./pages/themes/default"


export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        box-sizing: border-box;
        height: 100%;
        background-color: #FAFAFA;
    }

    .app {
        ${defaultColors}
    }
`
