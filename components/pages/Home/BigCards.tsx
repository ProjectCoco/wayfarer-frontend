import React from "react";
import styled from "styled-components";
import BigCard from "./BigCard";
import BigCardCarousel from "./BigCardCarousel";
import CardsHeader from "./CardsHeader";

export interface BigCardProps {
  type: string;
  name: string;
  title: string;
  memeber: string[];
  occupation: string;
  tag: string[];
  stack: string[];
  period: string;
  like: boolean;
  id: number;
}

const data = [
  {
    type: "project",
    name: "[프로젝트] 플러터",
    title: "덕질 아카이빙 서비스 '플러터'의 멤버를 모집합니다",
    memeber: ["프론트엔드(1)", "백엔드(2)", "UX UI 디자이너(1)"],
    occupation: "all",
    tag: ["덕질", "어덕행덕", "OTT", "개발자"],
    stack: ["a", "f", "k", "i", "r", "t"],
    period: "11.2~12.3",
    like: false,
    id: 0,
  },
  {
    type: "project",
    name: "[프로젝트] 웨이페어",
    title: "IT 커뮤니티 서비스 '웨이페어'의 멤버를 모집합니다",
    memeber: ["프론트엔드(1)", "백엔드(2)"],
    occupation: "developer",
    tag: ["덕질", "어덕행덕", "OTT", "개발자"],
    stack: ["a", "f", "k", "i", "r", "t"],
    period: "11.2~12.3",
    like: true,
    id: 1,
  },
  {
    type: "project",
    name: "[프로젝트] 스터디",
    title: "스터디 모집 서비스 '스터디'의 멤버를 모집합니다",
    memeber: ["UX UI 디자이너(1)"],
    occupation: "designer",
    tag: ["덕질", "어덕행덕", "OTT", "개발자"],
    stack: ["a", "f", "k", "i", "r", "t"],
    period: "11.2~12.3",
    like: false,
    id: 2,
  },
  {
    type: "study",
    name: "[스터디] 기획",
    title: "기획 스터디의 멤버를 모집합니다",
    memeber: ["기획자(4)"],
    occupation: "planner",
    tag: ["기획자"],
    stack: ["a", "f"],
    period: "11.2~12.3",
    like: true,
    id: 3,
  },
];

const BigCards = ({ title }: { title: string }) => {
  return (
    <LandingCardsContainer>
      <CardsHeader title={title} />
      <BigCardCarousel data={data} />
    </LandingCardsContainer>
  );
};

export default BigCards;

const LandingCardsContainer = styled.div``;
