import React from "react";
import styled from "styled-components";
import CheckBox from "../common/Input/CheckBox";

interface Props {
  label: string;
  checked: boolean;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function LabelCheck({ label, checked, name, onChange }: Props) {
  return (
    <Block>
      <CheckBox checked={checked} name={name} onChange={onChange} />
      <Label>{label}</Label>
    </Block>
  );
}

export default LabelCheck;

const Block = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Label = styled.span``;
