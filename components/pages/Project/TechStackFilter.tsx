import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FilterMenuType, TabTechStacks } from "../../../utils/Filter";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevArrowButton from "../Home/PrevArrowButton";
import NextArrowButton from "../Home/NextArrowButton";
import FilterTag from "../../common/FilterTag/FilterTag";

const TechStackFilter = ({ occupation }: { occupation: FilterMenuType }) => {
  const [techStackList, setTechStackList] = useState<any>(
    TabTechStacks[occupation]
  );
  const slideRef = useRef<Slider>(null);

  const handlePrevButtonClick = () => slideRef.current?.slickPrev();
  const handleNextButtonClick = () => slideRef.current?.slickNext();

  const handleTechStackClick = (stackName: string) => {
    setTechStackList((prev: any) => {
      return {
        ...prev,
        [stackName]: !prev[stackName],
      };
    });
  };

  useEffect(() => {
    setTechStackList(TabTechStacks[occupation]);
  }, [occupation]);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: <PrevArrowButton onClick={handlePrevButtonClick} />,
    nextArrow: <NextArrowButton onClick={handleNextButtonClick} />,
  };

  return (
    <TechStackFilterContainer>
      <TagsContainer ref={slideRef} {...settings}>
        {Object.keys(techStackList).map((stack) => (
          <FilterTag
            text={stack}
            key={stack}
            className={techStackList[stack] ? "selected" : ""}
            onClick={() => handleTechStackClick(stack)}
          />
        ))}
      </TagsContainer>
    </TechStackFilterContainer>
  );
};

export default TechStackFilter;

const TechStackFilterContainer = styled.div`
  width: 1280px;
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 45px;
  margin-bottom: 68px;

  .selected {
    background-color: ${(props) => props.theme.colors.Cosmic_black};
    color: ${(props) => props.theme.colors.gray200};
  }
`;

const TagsContainer = styled(Slider)`
  width: 1117px;

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
    right: -49px;
  }
`;
