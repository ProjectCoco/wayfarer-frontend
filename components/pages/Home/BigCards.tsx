import React from "react";
import styled from "styled-components";
import BigCard from "./BigCard";
import CardsHeader from "./CardsHeader";

export interface BigCardProps {
  name: string;
  title: string;
  memeber: string[];
  tag: string[];
  stack: string[];
  period: string;
  like: boolean;
  id: number;
}

const projectData = [
  {
    name: "[프로젝트] 플러터",
    title: "덕질 아카이빙 서비스 '플러터'의 멤버를 모집합니다",
    memeber: ["프론트엔드(1)", "백엔드(2)", "UX UI 디자이너(1)"],
    tag: ["덕질", "어덕행덕", "OTT", "개발자"],
    stack: ["a", "f", "k", "i", "r", "t"],
    period: "11.2~12.3",
    like: false,
    id: 0,
  },
  {
    name: "[프로젝트] 웨이페어",
    title: "IT 커뮤니티 서비스 '웨이페어'의 멤버를 모집합니다",
    memeber: ["프론트엔드(1)", "백엔드(2)", "UX UI 디자이너(1)"],
    tag: ["덕질", "어덕행덕", "OTT", "개발자"],
    stack: ["a", "f", "k", "i", "r", "t"],
    period: "11.2~12.3",
    like: true,
    id: 1,
  },
  // {
  //   name: "[프로젝트] 스터디",
  //   title: "스터디 모집 서비스 '스터디'의 멤버를 모집합니다",
  //   memeber: ["프론트엔드(1)", "백엔드(2)", "UX UI 디자이너(1)"],
  //   tag: ["덕질", "어덕행덕", "OTT", "개발자"],
  //   stack: ["a", "f", "k", "i", "r", "t"],
  //   period: "11.2~12.3",
  //   id: 2,
  // },
];

const BigCards = ({ title }: { title: string }) => {
  return (
    <LandingCardsContainer>
      <CardsHeader title={title} />
      <CardsContents>
        {projectData.map((data) => (
          <BigCard key={data.id} {...data} />
        ))}
      </CardsContents>
    </LandingCardsContainer>
  );
};

export default BigCards;

const LandingCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardsContents = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
`;
