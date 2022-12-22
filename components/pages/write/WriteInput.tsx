import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

function WriteInput({ ...props }: Props) {
  return <StyledInput {...props} />;
}

export default WriteInput;

const StyledInput = styled.input`
  border: none;
  width: 100%;

  &::placeholder {
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.03em;
    color: #222222;
    opacity: 0.3;
  }

  &:focus {
    outline: none;
  }
`;
