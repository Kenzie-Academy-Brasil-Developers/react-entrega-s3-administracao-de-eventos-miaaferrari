import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        outline: 0;
        border-color: var(---pink);
    }

    :root {
        --blue: #0080cc;
        --black: #0c0d0d;
        --yellow: #D6EE0D;
        --pink: #D40C56;
        --gray: #666360;
    }

    h1,h2,h3,h4,h5,h6 {
        font-weight: bold;
        color: var(--blue);
    }

    p {
        font-weight: 300;
        color: var(--black);
    }

    span {
        font-weight: 600;
        color: var(--black);

    }

    button {
        cursor: pointer;
        background: var(--yellow);
        color: var(--black);
        border-radius: 8px;
        border: 2px outset var(---gray); 

        :hover {
            opacity: 0.9;
            transition: 0.5s;
            border-color: var(---black);
        }
    }

    a {
        text-decoration: none;
    }
`;