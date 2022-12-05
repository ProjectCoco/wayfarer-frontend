import React from "react";
import styled from "styled-components";
import Asterisk from "../../common/Input/Asterisk";
import StyleInput from "./ModalInput";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  RightIcon?: React.ReactNode;
}

function LabelInput({
  label,
  placeholder,
  type,
  value,
  onChange,
  onClick,
  name,
  RightIcon,
}: Props) {
  return (
    <Block>
      <Label>
        <span>{label}</span>
        <Asterisk />
      </Label>
      <StyleInput
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onClick={onClick}
      />
      <RightIconBox>{RightIcon}</RightIconBox>
    </Block>
  );
}

export default LabelInput;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
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

const RightIconBox = styled.div`
  position: absolute;
  bottom: 10px;
  right: 0;
`;
