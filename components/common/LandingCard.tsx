import React from "react";
import styled from "styled-components";
import LandingCardTag from "./LandingCardTag";

function LandingCard() {
  return (
    <Container>
      <LandingCardTag mode={"HOT"} />
    </Container>
  );
}

export default LandingCard;

const Container = styled.div`
  width: 549px;
  height: 300px;
  /* background-color: red; */
`;
