import React from "react";
import styled from "styled-components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function AddPeople({ ...props }: Props) {
  return (
    <Block {...props}>
      <span>+ 인원추가</span>
    </Block>
  );
}

export default AddPeople;

const Block = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 6px 18px;
  gap: 10px;
  width: 95px;
  height: 29px;
  left: 1463px;
  top: 425px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 100px;
  cursor: pointer;

  span {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.03em;
    color: #298cff;
  }
`;
