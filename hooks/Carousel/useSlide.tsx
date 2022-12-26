import React, { useRef } from "react";
import Slider from "react-slick";

const useSlide = () => {
  const slideRef = useRef<Slider>(null);
  const handlePrevButtonClick = () => slideRef.current?.slickPrev();
  const handleNextButtonClick = () => slideRef.current?.slickNext();

  return {
    slideRef,
    handlePrevButtonClick,
    handleNextButtonClick,
  };
};

export default useSlide;
