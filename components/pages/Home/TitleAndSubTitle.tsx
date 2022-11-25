import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
}

function TitleAndSubTitle({ title }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}

export default TitleAndSubTitle;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.gray_800};
  font-weight: 700;
  font-size: 34px;
  line-height: 43px;
`;

const SubTitle = styled.div`
  color: ${({ theme }) => theme.colors.gray_800};
  font-weight: 400;
  font-size: 26px;
  line-height: 33px;
`;
