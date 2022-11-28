import React from "react";
import styled from "styled-components";
import CheckBox from "../common/Input/CheckBox";

interface Props {
  label: string;
}

function LabelCheck({ label }: Props) {
  return (
    <Block>
      <CheckBox />
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
