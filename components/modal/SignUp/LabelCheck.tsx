import React from "react";
import styled from "styled-components";
import CheckBox from "../../common/Input/CheckBox";

interface Props {
  label: string;
  checked: boolean;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  RightIcon?: React.ReactNode;
}

function LabelCheck({ label, checked, name, onChange, RightIcon }: Props) {
  return (
    <Block>
      <LabelBox>
        <CheckBox checked={checked} name={name} onChange={onChange} />
        <Label>{label}</Label>
      </LabelBox>
      {RightIcon}
    </Block>
  );
}

export default LabelCheck;

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LabelBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Label = styled.span``;
