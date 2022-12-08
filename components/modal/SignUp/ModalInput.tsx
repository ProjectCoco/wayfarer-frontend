import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

function StyleInput({
  name,
  type,
  placeholder,
  value,
  onChange,
  onClick,
}: Props) {
  return (
    <Input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onClick={onClick}
    />
  );
}

export default StyleInput;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #c2c2c2;
  padding-bottom: 8px;

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
