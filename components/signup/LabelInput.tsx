import React from "react";
import styled from "styled-components";
import Asterisk from "../common/Input/Asterisk";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function LabelInput({ label, placeholder, type }: Props) {
  return (
    <Block>
      <Label>
        <span>{label}</span>
        <Asterisk />
      </Label>
      <Input type={type} placeholder={placeholder} />
    </Block>
  );
}

export default LabelInput;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Label = styled.label`
  span:first-child {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #222222;
    letter-spacing: -0.03em;
  }
`;

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
