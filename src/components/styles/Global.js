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
        overflow-x: hidden;
        color: ${({ theme }) => theme.colors.fontColor};

        @media (min-width: ${({ theme }) => theme.tabPort}) {
            padding: 0 10vw;
        }
    }
`;

export const Button = styled.button`
  color: var(--clr-white);
  font-weight: bold;
  background-color: var(--clr-orange);
  border: none;
  border-radius: 5px;
  padding: 1em;
  font-size: inherit;
  width: ${({ width }) => width};
  cursor: pointer;
  box-shadow: 0 10px 10px var(--clr-orange-pale);

  img {
    margin-right: 10px;
    height: 15px;
  }
`;

export const Heading = styled.h1`
  font-size: clamp(1.6rem, 3vw, 3rem);
  line-height: 1.1;
  text-transform: capitalize;
  margin: 0.5em 0;
  color: ${({ theme }) => theme.colors.headingColor};
`;
