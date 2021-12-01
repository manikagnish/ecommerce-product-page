import styled from "styled-components";

export const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--clr-white);
  padding: 1.5em 0;

  img:nth-of-type(1) {
    margin-right: 10px;
  }

  img:nth-of-type(2) {
    margin-right: auto;
  }

  img:nth-of-type(3) {
    margin-right: 10px;
  }

  img:nth-of-type(4) {
    height: 25px;
    width: 25px;
  }
`;

export const StyledNav = styled.nav`
  min-height: 100vh;
  min-width: 70vw;
  padding: 2em;
  background-color: var(--clr-white);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;

  img {
    margin-bottom: 2em;
  }

  ul {
  }

  li {
    list-style-type: none;
    margin-bottom: 1em;
  }

  a {
    text-decoration: none;
    color: var(--clr-blue-dark);
    font-weight: bold;
  }
`;

export const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.75);
`;
