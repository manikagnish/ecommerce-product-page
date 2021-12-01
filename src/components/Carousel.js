import { StyledCarousel } from "./styles/Carousel.styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carouel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <StyledCarousel>
      <Slider {...settings}>
        <div>
          <img src="./images/image-product-1.jpg" alt="shoes" />
        </div>
        <div>
          <img src="./images/image-product-2.jpg" alt="shoes" />
        </div>
        <div>
          <img src="./images/image-product-3.jpg" alt="shoes" />
        </div>
        <div>
          <img src="./images/image-product-4.jpg" alt="shoes" />
        </div>
      </Slider>
    </StyledCarousel>
  );
}
