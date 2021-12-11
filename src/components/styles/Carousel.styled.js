import styled from "styled-components";

export const StyledCarousel = styled.div`
  margin-bottom: 2em;
  width: 100%;
  img {
    width: 100%;
  }

  ul {
    bottom: initial;
  }

  li {
    height: 3rem;
    width: 3rem;
    border-radius: 10px;
    overflow: hidden;
  }

  .slick-list {
    height: 100%;
  }

  .slick-slide,
  .slick-slide div {
    height: 100%;
  }

  @media (min-width: 800px) {
    width: 40%;
    border-radius: 10px;

    img {
      border-radius: 10px;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (min-width: 1200px) {
    li {
      height: 5rem;
      width: 5rem;
      border-radius: 10px;
      overflow: hidden;
    }
  }
`;

export const MiniImages = styled.a`
  height: 100%;
  width: 100%;

  img {
    height: 100%;
    width: 100%;
  }
`;
