import {
  StyledProcutInfo,
  CompanyLink,
  OriginalPrice,
  Price,
  Discount,
  Number,
  Update,
} from "./styles/ProductInfo.styled";
import { Heading } from "./styles/Global";
import { Column, Row } from "./styles/Flex.styled";
import { Button } from "./styles/Global";

export default function ProductInfo() {
  return (
    <StyledProcutInfo>
      <Column reverse>
        <Heading>Fall limited edition sneakers</Heading>
        <CompanyLink href="/ecommerce-product-page/">
          Sneaker company
        </CompanyLink>
      </Column>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>

      <Row margin="1.5em 0 .5em 0">
        <Price>$125.00</Price>
        <Discount>50%</Discount>
        <OriginalPrice>$250.00</OriginalPrice>
      </Row>

      <Column>
        <Row
          background="var(--clr-blue-grayish-light)"
          padding="1em"
          margin="1em 0"
        >
          <Update>-</Update>
          <Number>0</Number>
          <Update>+</Update>
        </Row>
        <Button>
          <Row justify="center">
            <img src="./images/icon-cart-white.svg" alt="cart" />{" "}
            <span>Add to cart</span>
          </Row>
        </Button>
      </Column>
    </StyledProcutInfo>
  );
}
