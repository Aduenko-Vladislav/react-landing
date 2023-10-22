import React, { useState } from "react";
import SlideOne from "../../assets/img/swiper_img1.jpg";
import SlideOTwo from "../../assets/img/swiper_img2.jpg";
import SlideTree from "../../assets/img/swiper_img3.jpg";
import SlideFour from "../../assets/img/swiper_img4.jpg";
import SlideFive from "../../assets/img/swiper_img5.jpg";

import {
  StyledSlider,
  CarouselImg,
  SliderImg,
  CarouselInfo,
  InfoContainer,
  Text,
  Name,
  Swipper,
  Dot,
} from "./styles";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      id: 1,
      url: SlideOne,
      title: `“Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Aenean eu leo quam...”`,
      name: "Susan Sims, Interaction Designer at XYZ",
    },
    {
      id: 2,
      url: SlideOTwo,
      title: `“Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Aenean eu leo quam...”`,
      name: "Susan Sims, Interaction Designer at XYZ",
    },
    {
      id: 3,
      url: SlideTree,
      title: `“Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Aenean eu leo quam...”`,
      name: "Susan Sims, Interaction Designer at XYZ",
    },
    {
      id: 4,
      url: SlideFour,
      title: `“Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Aenean eu leo quam...”`,
      name: "Susan Sims, Interaction Designer at XYZ",
    },
    {
      id: 5,
      url: SlideFive,
      title: `“Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Aenean eu leo quam...”`,
      name: "Susan Sims, Interaction Designer at XYZ",
    },
  ];

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <StyledSlider id="testimonials">
        <CarouselImg>
          <SliderImg src={slides[currentIndex].url} />
        </CarouselImg>
        <CarouselInfo>
          <InfoContainer>
            <Text>{slides[currentIndex].title}</Text>
            <Name>{slides[currentIndex].name}</Name>
          </InfoContainer>
        </CarouselInfo>
      </StyledSlider>
      <Swipper>
        {slides.map((slide, slideIndex) => (
          <Dot
            key={slideIndex}
            active={slideIndex === currentIndex ? "true" : "false"}
            onClick={() => goToSlide(slideIndex)}
          ></Dot>
        ))}
      </Swipper>
    </>
  );
};

export default Slider;
