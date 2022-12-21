import React from "react";
import styled from "styled-components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function SubmitButton({ ...props }: Props) {
  return <Button {...props}>게시글 등록</Button>;
}

export default SubmitButton;

const Button = styled.button`
  width: 400px;
  height: 46px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: -0.03em;
  color: #ffffff;
  background-color: black;
  margin: auto;
  cursor: pointer;
`;
