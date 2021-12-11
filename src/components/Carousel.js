import { useState, useEffect } from "react";

import { StyledCarousel, MiniImages } from "./styles/Carousel.styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carouel() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const settingBig = {
    customPaging: function (i) {
      return (
        <MiniImages>
          <img src={`./images/image-product-${i + 1}.jpg`} alt="Product" />
        </MiniImages>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settingSmall = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <StyledCarousel>
      {screenWidth > 800 ? (
        <Slider {...settingBig}>
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
      ) : (
        <Slider {...settingSmall}>
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
      )}
    </StyledCarousel>
  );
}
