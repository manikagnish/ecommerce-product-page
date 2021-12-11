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

  .logo {
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

  @media (min-width: 600px) {
    padding: 1.5em 0;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid var(--clr-blue-grayish);
    margin-bottom: 2em;

    img:nth-of-type(2) {
      margin-right: 1em;
    }
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

  @media (min-width: 800px) {
    min-height: fit-content;
    min-width: 50vw;
    width: 40%;
    padding: 2em;
    background-color: var(--clr-white);
    position: static;
    transform: none;
    transition: none;

    ul {
      display: flex;
    }
    li {
      margin-bottom: 0;
      margin-right: 1em;
    }
    a {
      text-decoration: none;
      color: var(--clr-blue-grayish-dark);
      font-weight: normal;
      transition: all 0.3s ease;
      &:hover {
        color: var(--clr-black);
        border-bottom: 5px solid var(--clr-orange);
        padding-bottom: 3.2em;
      }
    }
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

export const Hamburger = styled.img`
  margin-right: 15px;
  cursor: pointer;

  @media (min-width: 800px) {
    display: none;
  }
`;

export const Avatar = styled.img`
  @media (min-width: 800px) {
    height: 2.5rem !important;
    width: 2.5rem !important;
  }
  &:hover {
    border: 2px solid var(--clr-orange);
    border-radius: 100%;
  }
`;
