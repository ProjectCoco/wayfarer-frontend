import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { CardImg } from "../../public/CardImg";
import HashTag from "./HashTag";

const tags = ["취업", "사이드프로젝트"];

function AdCard() {
  return (
    <Container>
      <Image src={CardImg.AdCardImg} alt="Add Card Image" />
      <Content>
        <Title>웨이페어에서 직접 팀원을 모집해보세요!</Title>
        <HashTagBox>
          {tags.map((tag, index) => (
            <HashTag key={index} tag={tag} />
          ))}
        </HashTagBox>
        <View>조회수 {107}</View>
      </Content>
    </Container>
  );
}

export default AdCard;

const Container = styled.div`
  width: 372px;
`;

const Content = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;

const Title = styled.div`
  margin-top: 50px;
  color: ${({ theme }) => theme.colors.gray_700};
  font-weight: 500;
  font-size: 30px;
  line-height: 38px;
`;

const HashTagBox = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 23px;
`;

export const View = styled.p`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.gray_500};
  font-weight: 500;
  line-height: 22.54px;
`;
