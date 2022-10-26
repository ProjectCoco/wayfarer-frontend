import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { CardImg } from "../../public/CardImg";
import HashTag from "./HashTag";
import { ExpectStartDate, TechStackBox, View } from "./LandingCard";
import TechStackTag from "./TechStackTag";
import { TechStackImgType } from "../../public/TechStackImg";

const Tags = ["프로젝트", "온라인", "1명", "3개월"];
const TechStacks = ["vue", "figma", "django"];

function StudyCard() {
  return (
    <Container>
      <Image src={CardImg.ProjectHorizontalImg} alt={"landing_card"} />
      <Content>
        <Title>프로젝트 명 어쩌구 타이틀은2줄까지 넘으면 점점</Title>
        <HashTagBox>
          {Tags.map((tag, index) => (
            <HashTag key={index} tag={tag} />
          ))}
        </HashTagBox>
        <View1>조회수 {107}</View1>
        <ExpectStartDate>시작예정 2022.10.17</ExpectStartDate>
        <TechStackBox1>
          {TechStacks.map((techStack, index) => (
            <TechStackTag
              key={index}
              techStack={techStack as TechStackImgType}
            />
          ))}
        </TechStackBox1>
      </Content>
    </Container>
  );
}

export default StudyCard;

const Container = styled.div`
  width: 372px;
  height: 410px;
  position: relative;
  cursor: pointer;
`;

const Content = styled.div`
  height: 254px;
  padding-left: 20px;
  padding-right: 36px;
`;

const Title = styled.h1`
  margin-top: 48.5px;
  color: ${({ theme }) => theme.colors.gray_700};
  font-weight: 500;
  font-size: 30px;
  line-height: 38px;
`;

const HashTagBox = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 4px;
`;

const View1 = styled(View)`
  margin-top: 15px;
`;

const TechStackBox1 = styled(TechStackBox)`
  top: 131px;
  right: 20px;
`;
