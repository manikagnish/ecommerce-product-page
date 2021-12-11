import Carousel from "./Carousel";
import ProductInfo from "./ProductInfo";
import { StyledMain } from "./styles/Main.styled";

export default function Main() {
  return (
    <StyledMain>
      <Carousel />
      <ProductInfo />
    </StyledMain>
  );
}
