import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  background: ${({ background }) => background} 0;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "column-reverse" : "column")};
  margin: ${({ margin }) => margin} 0;
`;
