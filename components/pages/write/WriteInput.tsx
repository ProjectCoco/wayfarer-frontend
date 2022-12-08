import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

function WriteInput({
  name,
  type,
  placeholder,
  value,
  onChange,
  onClick,
  onKeyUp,
}: Props) {
  return (
    <StyledInput
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onClick={onClick}
      onKeyUp={onKeyUp}
    />
  );
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
