import React from "react";
import styled from "styled-components";
import StudyForm from "../../components/pages/write/StudyForm";

function Write() {
  return (
    <Container>
      <Title>스터디</Title>
      <StudyForm />
    </Container>
  );
}

export default Write;

const Container = styled.div`
  max-width: 1200px;

  margin: auto;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: -0.03em;
  color: #2d2d2f;
  margin-bottom: 100px;
`;
