import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --purple-500:#7A40D3;
    }

    body{
        font-family:'Inter', sans-serif;
    }

    *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    }
`