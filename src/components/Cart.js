import { StyledCart, CardItem } from "./styles/Cart.styled";
import { Button } from "./styles/Global";
import { Row } from "./styles/Flex.styled";

export default function Cart() {
  return (
    <StyledCart>
      <h2>Cart</h2>
      <CardItem>
        <Row justify="space-between">
          <img src="./images/image-product-1-thumbnail.jpg" alt="shoes" />
          <div>
            <p>Autumn Limited Edition...</p>
            <p>$125.00 x 3 $375.00</p>
          </div>
          <img src="./images/icon-delete.svg" alt="bin" />
        </Row>
        <Button width="100%">Checkout</Button>
      </CardItem>
    </StyledCart>
  );
}
