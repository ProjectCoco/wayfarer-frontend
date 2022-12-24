import React from "react";
import styled from "styled-components";
import CouumnityCardCarousel from "./CommunityCardCarousel";

const communityCardData = [
  {
    occupation: "개발",
    tag: ["인간관계", "회사생활"],
    title: "디자이너와 소통하는 법좀 알려주세요.",
    nickName: "닉네임",
    id: 0,
  },
  {
    occupation: "디자인",
    tag: ["인간관계", "회사생활"],
    title: "직장 상사가 너무 괴롭혀요",
    nickName: "닉네임",
    id: 1,
  },
  {
    occupation: "기획",
    tag: ["커리어"],
    title: "기획자가 추천하는 아이데이션 사이트 TOP 10",
    nickName: "닉네임",
    id: 2,
  },
  {
    occupation: "기획",
    tag: ["커리어"],
    title: "기획자가 추천하는 아이데이션 사이트 TOP 10",
    nickName: "닉네임",
    id: 3,
  },
];

const CommunityCards = () => {
  return (
    <CommunityCardsContainer>
      <h2>인기글 Top 10</h2>
      <CouumnityCardCarousel data={communityCardData} />
    </CommunityCardsContainer>
  );
};

export default CommunityCards;

const CommunityCardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 58px;
  margin-bottom: 100px;

  h2 {
    font-size: ${(props) => props.theme.fontSize.text_5xl};
    font-weight: 600;
    margin-bottom: 50px;
    width: 100%;
  }
`;
