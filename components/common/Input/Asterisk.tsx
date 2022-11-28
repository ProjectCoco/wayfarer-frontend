import React from "react";
import styled from "styled-components";

function Asterisk() {
  return <StyledSpan>*</StyledSpan>;
}

export default Asterisk;

const StyledSpan = styled.span`
  color: #ff7262;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;
