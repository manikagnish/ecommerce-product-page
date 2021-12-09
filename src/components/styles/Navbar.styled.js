import styled from "styled-components";

export const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--clr-white);
  padding: 1.5em 7vw;
  overflow-x: hidden;

  img:nth-of-type(1) {
    margin-right: 15px;
    cursor: pointer;
  }

  img:nth-of-type(2) {
    margin-right: auto;
  }

  .cart {
    margin-right: 15px;
    cursor: pointer;
  }

  .profile-img {
    height: 25px;
    width: 25px;
  }
`;

export const StyledCart = styled.div`
  position: relative;

  &:after {
    content: "${({ count }) => count}";
    width: 20px;
    border-radius: 8px;
    background-color: var(--clr-orange);
    position: absolute;
    top: -20%;
    right: 20%;
    z-index: 100;
    color: white;
    font-size: 10px;
    /* padding: 1px 0; */
    text-align: center;
  }
`;

export const StyledNav = styled.nav`
  min-height: 100vh;
  min-width: 60vw;
  padding: 2em;
  background-color: var(--clr-white);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 20;
  transform: translateX(${({ translate }) => translate});
  transition: all 1s ease-in-out;

  img {
    margin-bottom: 2em;
    cursor: pointer;
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
  display: ${({ display }) => display};
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 15;
  background-color: rgba(0, 0, 0, 0.75);
`;
