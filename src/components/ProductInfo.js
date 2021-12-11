import { useContext, useState } from "react";
import { Context } from "../Context";

import {
  StyledProcutInfo,
  CompanyLink,
  OriginalPrice,
  Price,
  Discount,
  Number,
  Update,
  ButtonContainer,
  PriceContainer,
} from "./styles/ProductInfo.styled";
import { Heading } from "./styles/Global";
import { Column, Row } from "./styles/Flex.styled";
import { Button } from "./styles/Global";

export default function ProductInfo() {
  const { showCount } = useContext(Context);
  const [count, setCount] = showCount;
  const [itemCount, setItemCount] = useState(0);

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

      <PriceContainer>
        <Row>
          <Price>$125.00</Price>
          <Discount>50%</Discount>
        </Row>
        <OriginalPrice>$250.00</OriginalPrice>
      </PriceContainer>

      <ButtonContainer>
        <Row
          background="var(--clr-blue-grayish-light)"
          padding="1em"
          margin="1em 0"
        >
          <Update
            onClick={() =>
              setItemCount(itemCount > 0 ? itemCount - 1 : itemCount)
            }
          >
            -
          </Update>
          <Number>{itemCount}</Number>
          <Update onClick={() => setItemCount(itemCount + 1)}>+</Update>
        </Row>
        <Button onClick={() => setCount(itemCount)}>
          <Row justify="center">
            <img src="./images/icon-cart-white.svg" alt="cart" />{" "}
            <span>Add to cart</span>
          </Row>
        </Button>
      </ButtonContainer>
    </StyledProcutInfo>
  );
}
