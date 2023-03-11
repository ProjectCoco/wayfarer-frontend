import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

export interface AtomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const AtomInput = ({ ...props }: AtomInputProps) => {
  return <StyledInput {...props} />;
};

export default AtomInput;

const StyledInput = styled.input<{ error?: boolean }>`
  border: none;
  padding-bottom: 8px;
  color: ${({ error }) => (error ? "#F94A4A" : "#222222")};
  border-bottom: ${({ error }) =>
    error ? "solid 1px #F94A4A" : "solid 1px #c2c2c2"};

  &::placeholder {
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.03em;
    color: "#222222";
    opacity: 0.3;
  }

  &:focus {
    outline: none;
    border-bottom: solid 1px #222222;
  }
`;
