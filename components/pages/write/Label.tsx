import React from "react";
import styled from "styled-components";

interface Props {
  label: string;
  icon?: React.ReactNode;
}

function Label({ label, icon }: Props) {
  return (
    <Block>
      <StyledLabel>{label}</StyledLabel>
      {icon}
    </Block>
  );
}

export default Label;

const Block = styled.div`
  display: flex;
`;

const StyledLabel = styled.label`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.03em;
  color: #222222;
`;
