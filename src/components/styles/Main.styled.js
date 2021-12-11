import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 10em;

  @media (min-width: 800px) {
    flex-direction: row;
    align-items: center;
  }
`;
