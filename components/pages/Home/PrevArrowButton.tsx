import React from "react";
import styled from "styled-components";

const PrevArrowButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <NextArrow
      onClick={onClick}
      className="prev"
      width="16"
      height="28"
      viewBox="0 0 16 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.25 26.0273L1.75 13.6855L14.25 1.34375"
        stroke="#B0B0B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </NextArrow>
  );
};

export default PrevArrowButton;

const NextArrow = styled.svg`
  display: block;
  position: absolute;
  z-index: 9;
  left: -20;
`;
