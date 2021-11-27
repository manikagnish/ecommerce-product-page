import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        /* primary */
        --clr-orange: hsl(26, 100%, 55%);
        --clr-orange-pale: hsl(25, 100%, 94%);

        /* neutral */
        --clr-blue-dark: hsl(220, 13%, 13%);
        --clr-blue-grayish: hsl(220, 14%, 75%);
        --clr-blue-grayish-dark: hsl(219, 9%, 45%);
        --clr-blue-grayish-light: hsl(223, 64%, 98%);
        --clr-white: hsl(0, 0%, 100%);
        --clr-black: hsl(0,0%,0%);
    }

    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Kumbh Sans', sans-serif;
        font-size: 16px;
    }
`;

export const Button = styled.button``;
