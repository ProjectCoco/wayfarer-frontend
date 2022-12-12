import React from "react";
import styled from "styled-components";

const CardsHeader = ({ title }: { title: string }) => {
  return (
    <CardsHeaderContainer>
      <CardsTitle>{title}</CardsTitle>
      <div>{"전체보기 >"}</div>
    </CardsHeaderContainer>
  );
};

export default CardsHeader;

const CardsHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 46px;
  width: 100%;
  div {
    color: #999999;
    font-size: ${(props) => props.theme.fontSize.text_xl};
  }

  div:hover {
    cursor: pointer;
  }
`;

const CardsTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSize.text_5xl};
  font-weight: 600;
`;
