import React from "react";
import styled from "styled-components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

function SubmitButton({ onClick, title, disabled }: Props) {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {title}
    </Button>
  );
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

  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }
`;
