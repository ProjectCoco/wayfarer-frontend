import React from "react";
import styled from "styled-components";

interface Props {
  visible: boolean;
}

function OverLay({ visible }: Props) {
  return <>{visible && <Fill />}</>;
}

export default OverLay;

const Fill = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;
