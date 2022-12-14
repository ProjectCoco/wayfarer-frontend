import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BigCard from "./BigCard";
import styled from "styled-components";
import PrevArrowButton from "./PrevArrowButton";
import NextArrowButton from "./NextArrowButton";
import { BigCardProps } from "./BigCards";
import useSlide from "../../../hooks/Carousel/useSlide";

const BigCardCarousel = ({ data }: { data: BigCardProps[] }) => {
  const { slideRef, handlePrevButtonClick, handleNextButtonClick } = useSlide();

  const settings = {
    infinite: false,
    dots: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <PrevArrowButton onClick={handlePrevButtonClick} />,
    nextArrow: <NextArrowButton onClick={handleNextButtonClick} />,
  };

  return (
    <BigCardCarouselContainer ref={slideRef} {...settings}>
      {data.map((data) => (
        <BigCard key={data.id} {...data} />
      ))}
    </BigCardCarouselContainer>
  );
};

export default BigCardCarousel;

const BigCardCarouselContainer = styled(Slider)`
  > svg {
    top: 138px;
    cursor: pointer;
  }

  > .prev {
    left: -68.25px;
  }

  > .next {
    right: -68.25px;
  }
`;
