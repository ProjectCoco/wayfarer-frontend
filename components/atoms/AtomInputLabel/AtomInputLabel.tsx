import React from "react";
import styled from "styled-components";

export interface AtomInputLabelProps {
  title: string;
  asterisk?: boolean;
}

const AtomInputLabel = ({ title, asterisk }: AtomInputLabelProps) => {
  return (
    <Box>
      <Label>{title}</Label>
      {asterisk && <Asterisk>*</Asterisk>}
    </Box>
  );
};

export default AtomInputLabel;

const Box = styled.div`
  display: flex;
  gap: 4px;
  font-size: 14px;
  line-height: 17px;
`;

const Label = styled.label`
  font-weight: 500;
  color: #222222;
  letter-spacing: -0.03em;
`;

const Asterisk = styled.span`
  color: #ff7262;
  font-weight: 500;
`;
