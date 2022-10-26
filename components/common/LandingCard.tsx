import React from "react";
import styled from "styled-components";
import HashTag from "./HashTag";
import LandingCardTag from "./LandingCardTag";
import Image from "next/image";
import { CardImg } from "../../public/CardImg";
import TechStackTag from "./TechStackTag";
import { TechStackImgType } from "../../public/TechStackImg";

const HashTags = ["프로젝트", "온라인", "1명", "3개월"];
const TechStacks = ["vue", "figma", "django"];

function LandingCard() {
  return (
    <Container>
      <LeftContentBox>
        <TagBox>
          <LandingCardTag mode="HOT" />
          <LandingCardTag mode="모집중" />
        </TagBox>
        <Title>프로젝트 명 어쩌구 타이틀은 2줄까지하고 넘으면 점점처리</Title>
        <HashTagBox>
          {HashTags.map((tag, index) => (
            <HashTag key={index} tag={tag} />
          ))}
        </HashTagBox>
        <View>조회수 {107}</View>
        <ExpectStartDate>시작예정 {"2022.10.17"}</ExpectStartDate>
      </LeftContentBox>
      <RightImgBox>
        <Image src={CardImg.StudyVerticalImg} alt="SideProjectImg" />
      </RightImgBox>
      <TechStackBox>
        {TechStacks.map((techStack, index) => (
          <TechStackTag key={index} techStack={techStack as TechStackImgType} />
        ))}
      </TechStackBox>
    </Container>
  );
}

export default LandingCard;

const Container = styled.div`
  width: 549px;
  height: 300px;
  /* border: solid 1px lightblue; */
  display: flex;
  position: relative;
  cursor: pointer;
`;

const LeftContentBox = styled.div`
  width: 70.8%;
`;

const RightImgBox = styled.div`
  width: 29.2%;
`;

const TagBox = styled.div`
  display: flex;
  margin-top: 25px;
  gap: 8px;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.gray_700};
  font-size: 30px;
  margin-top: 20px;
  line-height: 37.56px;
  font-weight: 500;
`;

const HashTagBox = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 4px;
`;

export const View = styled.p`
  margin-top: 36px;
  color: ${({ theme }) => theme.colors.gray_500};
  font-weight: 500;
  line-height: 22.54px;
`;

export const ExpectStartDate = styled.p`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.gray_600};
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
`;

export const TechStackBox = styled.div`
  display: flex;
  gap: 12px;
  position: absolute;
  bottom: 16.75px;
  right: 140px;
  height: 40.25px;
`;
