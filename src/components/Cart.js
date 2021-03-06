import { useContext } from "react";
import { Context } from "../Context";

import { StyledCart, CardItem } from "./styles/Cart.styled";
import { Button } from "./styles/Global";
import { Row } from "./styles/Flex.styled";

export default function Cart({ display }) {
  const { showCount } = useContext(Context);
  const [count, setCount] = showCount;

  return (
    <StyledCart display={display}>
      <h2>Cart</h2>
      <CardItem>
        {count > 0 ? (
          <>
            <Row justify="space-between" width="100%">
              <img src="./images/image-product-1-thumbnail.jpg" alt="shoes" />
              <div>
                <p>Autumn Limited Edition...</p>
                <p>$125.00 x {count} $375.00</p>
              </div>
              <img
                src="./images/icon-delete.svg"
                alt="bin"
                onClick={() => {
                  setCount(0);
                }}
              />
            </Row>
            <Button width="100%">Checkout</Button>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </CardItem>
    </StyledCart>
  );
}
