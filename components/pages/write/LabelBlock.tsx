import React from "react";
import styled from "styled-components";

interface Props {
  label: React.ReactElement;
  customInput: React.ReactElement;
}

function LabelBlock({ label, customInput }: Props) {
  return (
    <Block>
      <Label>{label}</Label>
      <Content>{customInput}</Content>
    </Block>
  );
}

export default LabelBlock;

const Block = styled.div`
  width: 100%;
  min-height: 39px;
  border-bottom: solid 1px black;
  border-color: rgba(0, 0, 0, 0.3);
  display: flex;
`;

const Label = styled.label`
  width: 200px;
`;

const Content = styled.div`
  flex: 1;
`;
