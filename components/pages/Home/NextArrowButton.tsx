import React from "react";
import styled from "styled-components";

const NextArrowButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <NextArrow
      onClick={onClick}
      className="next"
      width="16"
      height="28"
      viewBox="0 0 16 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.34939 26.502L14.0096 14.002L1.34939 1.50195"
        stroke="#B0B0B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </NextArrow>
  );
};

export default NextArrowButton;

const NextArrow = styled.svg`
  display: block;
  position: absolute;
`;
