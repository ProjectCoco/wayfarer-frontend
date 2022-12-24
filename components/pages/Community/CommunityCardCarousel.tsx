import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useSlide from "../../../hooks/Carousel/useSlide";
import NextArrowButton from "../Home/NextArrowButton";
import PrevArrowButton from "../Home/PrevArrowButton";
import CommunityCard from "./CommunityCard";

interface CommunityCardData {
  occupation: string;
  tag: string[];
  title: string;
  nickName: string;
  id: number;
}

const CommunityCardCarousel = ({ data }: { data: CommunityCardData[] }) => {
  const { slideRef, handlePrevButtonClick, handleNextButtonClick } = useSlide();

  const settings = {
    infinite: false,
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrowButton onClick={handlePrevButtonClick} />,
    nextArrow: <NextArrowButton onClick={handleNextButtonClick} />,
  };
  return (
    <CommunityCardCarouselContainer>
      <CardCarousel ref={slideRef} {...settings}>
        {data.map((data) => (
          <CommunityCard key={data.id} {...data} />
        ))}
      </CardCarousel>
    </CommunityCardCarouselContainer>
  );
};

export default CommunityCardCarousel;

const CommunityCardCarouselContainer = styled.div`
  width: 1155px;
`;

const CardCarousel = styled(Slider)`
  > svg {
    top: 122.28px;
    cursor: pointer;
  }

  > .prev {
    left: -62.5px;
  }

  > .next {
    right: -62.5px;
  }
`;
