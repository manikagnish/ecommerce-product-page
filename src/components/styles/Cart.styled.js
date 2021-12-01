import styled from "styled-components";

export const StyledCart = styled.div`
  min-height: 15rem;
  min-width: 95vw;
  background-color: var(--clr-white);
  position: absolute;
  left: 2.5vw;
  top: 5rem;
  z-index: 10;
  border-radius: 10px;

  h2 {
    margin-bottom: 1em;
    border-bottom: 0.5px solid var(--clr-blue-grayish);
    width: 100%;
    padding: 1em;
    font-size: 1.2rem;
    color: var(--clr-black);
  }
`;

export const CardItem = styled.div`
  padding: 0 1em;

  button {
    margin-top: 1em;
  }
  img {
    height: 3rem;
    border-radius: 5px;
  }
  img:nth-of-type(2) {
    height: 1rem;
    margin-left: auto;
  }
  p {
    font-size: 0.9rem;
  }
`;
