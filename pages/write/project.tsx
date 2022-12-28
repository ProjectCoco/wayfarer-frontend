import React from "react";
import styled from "styled-components";
import ProjectForm from "../../components/pages/write/ProjectForm";

function Write() {
  return (
    <Container>
      <Title>사이드프로젝트</Title>
      <ProjectForm />
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
