import { createGlobalStyle } from "styled-components";
import {defaultColors} from "./pages/themes/default"


export const GlobalStyles = createGlobalStyle`
    .app {
        ${defaultColors}
    }
`
