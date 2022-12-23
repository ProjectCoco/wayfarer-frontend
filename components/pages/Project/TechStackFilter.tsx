import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FilterMenuType, TabTechStacks } from "../../../utils/Filter";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevArrowButton from "../Home/PrevArrowButton";
import NextArrowButton from "../Home/NextArrowButton";
import FilterTag from "../../common/FilterTag/FilterTag";
import useSlide from "../../../hooks/Carousel/useSlide";
import useTagClick from "../../../hooks/FilterTag/useTagClick";

const TechStackFilter = ({ occupation }: { occupation: FilterMenuType }) => {
  const { tagList, setTagList, handleTagClick } = useTagClick(
    TabTechStacks[occupation]
  );
  const { slideRef, handlePrevButtonClick, handleNextButtonClick } = useSlide();

  useEffect(() => {
    setTagList(TabTechStacks[occupation]);
  }, [occupation]);

  const settings = {
    slidesToScroll: 1,
    infinite: false,
    variableWidth: true,
    prevArrow: <PrevArrowButton onClick={handlePrevButtonClick} />,
    nextArrow: <NextArrowButton onClick={handleNextButtonClick} />,
  };

  return (
    <TechStackFilterContainer>
      <TagsContainer ref={slideRef} {...settings}>
        {Object.keys(tagList).map((stack) => (
          <FilterTag
            text={stack}
            key={stack}
            className={tagList[stack] ? "selected" : ""}
            onClick={() => handleTagClick(stack)}
          />
        ))}
      </TagsContainer>
      <RightGradientBox />
    </TechStackFilterContainer>
  );
};

export default TechStackFilter;

const TechStackFilterContainer = styled.div`
  width: 1280px;
  display: flex;
  position: relative;
  gap: 15px;
  margin-top: 45px;
  margin-bottom: 68px;

  .selected {
    background-color: ${(props) => props.theme.colors.Cosmic_black};
    color: ${(props) => props.theme.colors.gray200};
  }
`;

const TagsContainer = styled(Slider)`
  width: 1166px;
  position: absolute;
  left: 66.99px;

  .slick-track {
    display: flex;
    gap: 15px;
  }

  > svg {
    top: 8.5px;
    cursor: pointer;
  }

  > .prev {
    left: -49px;
  }

  > .next {
    right: 0px;
    z-index: 1;
  }
`;

const RightGradientBox = styled.div`
  position: absolute;
  right: 48px;
  width: 59px;
  height: 42px;
  background-image: linear-gradient(to right, transparent 0%, white 20%);
`;
