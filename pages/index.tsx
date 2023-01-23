import type { NextPage } from "next";
import styled from "styled-components";
import Banner from "../components/common/Banner/Banner";
import SubBanner from "../components/common/Banner/SubBanner";
import BigCards from "../components/pages/Home/BigCards";
import CardsHeader from "../components/pages/Home/CardsHeader";

const Home: NextPage = () => {
  return (
    <HomeContainer>
      <Banner text={"모집글 작성하기"} />
      <BigCardsContainer>
        <BigCards title={"지금 뜨는 사이드 프로젝트 보러 갈까요? 🚀"} />
        <BigCards title={"따끈따끈한 신규 스터디 구경해보세요 👀"} />
        <BigCards title={"지금 당신에게 필요한 인사이트 ✏️"} />
      </BigCardsContainer>
      <SubBanner />
      <SmallCardsContainer>
        <CardsHeader title={"모든 사이드 프로젝트를 모아모아"} />
      </SmallCardsContainer>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

const BigCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1280px;
  margin-top: 68.23px;
  gap: 193.22px;
`;

const SmallCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1280px;
`;
