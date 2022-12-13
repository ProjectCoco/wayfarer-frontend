import React from "react";
import styled from "styled-components";
import SmallCard from "./SmallCard";

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
  {
    name: "[프로젝트] 스터디",
    title: "스터디 모집 서비스 '스터디'의 멤버를 모집합니다",
    memeber: ["프론트엔드(1)", "백엔드(2)", "UX UI 디자이너(1)"],
    tag: ["덕질", "어덕행덕", "OTT", "개발자"],
    stack: ["a", "f", "k", "i", "r", "t"],
    period: "11.2~12.3",
    like: false,
    id: 2,
  },
  {
    name: "[프로젝트] 다이어트 코칭",
    title: "다이어트 코칭 어플리케이션 개발자 모집합니다",
    memeber: ["프론트엔드(1)", "백엔드(2)", "UX UI 디자이너(1)"],
    tag: ["해시태그", "해시태그", "해시태그"],
    stack: ["a", "f", "k", "i", "r", "t"],
    period: "11.8~",
    like: true,
    id: 3,
  },
];

const SmallCards = () => {
  return (
    <SmallCardsContainer>
      {projectData.map((data) => (
        <SmallCard key={data.id} {...data} />
      ))}
    </SmallCardsContainer>
  );
};

export default SmallCards;

const SmallCardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 100px;
  grid-column-gap: 15px;
`;
