import styled from "styled-components";

export const StyledProcutInfo = styled.div`
  padding: 2em 7vw;
  p {
    line-height: 1.4;
    margin: 0.5em 0;
  }
`;

export const CompanyLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  color: var(--clr-orange);
  letter-spacing: 1.5px;
  font-size: clamp(0.7rem, 1vw, 1.6rem);
`;

export const OriginalPrice = styled.span`
  text-decoration: line-through;
  font-weight: bold;
  color: var(--clr-blue-grayish);
`;

export const Price = styled.span`
  font-weight: bold;
  font-size: clamp(1.6rem, 3vw, 3rem);
  color: ${({ theme }) => theme.colors.headingColor};
`;

export const Discount = styled.span`
  background: var(--clr-orange-pale);
  color: var(--clr-orange);
  font-weight: bold;
  padding: 2px 5px;
  margin: 0 auto 0 15px;
`;

export const Number = styled.span`
  color: var(--clr-blue-dark);
  font-weight: bold;
  margin: 0 auto;
`;

export const Update = styled.span`
  color: var(--clr-orange);
  font-weight: bold;
  cursor: pointer;
`;
