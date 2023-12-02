import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --toastify-color-error:#E83F5B; 
        --toastify-color-success:#3FE864;
    }

    *{
        box-sizing:border-box;
        padding:0;
        margin:0;
    }

    body{
        font-family:var(--font-family);
        width:100vw;
        height:100vh;
    }


    ul, ol {
        list-style: none;
        padding-inline-start: 0
    }

    a{
        text-decoration: none;
    }

    button{
        display:inline-flex;
        border: none;
        cursor: pointer;
    }

    input{
        border: none;
    }
`;
