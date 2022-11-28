import React from "react";
import styled from "styled-components";

function SubmitButton() {
  return <Button>가입하기</Button>;
}

export default SubmitButton;

const Button = styled.button`
  width: 100%;
  height: 46px;
  background-color: #000000;
  color: white;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.03em;
`;
