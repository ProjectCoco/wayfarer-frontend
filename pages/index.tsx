import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import RecruitToggle from "../components/common/RecruitToggle";
import styled from "styled-components";
import LandingCard from "../components/common/LandingCard";
import StudyCard from "../components/common/StudyCard";
import SubBanner from "../components/pages/Home/SubBanner";
import TitleAndSubTitle from "../components/pages/Home/TitleAndSubTitle";
import Banner from "../components/common/Banner";

const Home: NextPage = () => {
  return (
    <HomeContainer>
      <Banner />
      <ContentsContainer>
        <PopularContainer>
          <TitleAndSubTitle title="지금 뜨는 사이드프로젝트 보러갈까요? 🚀" />
          <LandingCards>
            <LandingCard />
            <LandingCard />
          </LandingCards>
        </PopularContainer>
        <StudyContainer>
          <TitleAndSubTitle title="따끈 따끈 신규스터디, 지금 바로 지원하세요! 👈" />
          <LandingCards>
            <LandingCard />
            <LandingCard />
          </LandingCards>
        </StudyContainer>
        <ProjectContainer>
          <TitleAndSubTitle title="이런 프로젝트, 어떠세요? 🥰" />
          <LandingCards>
            <StudyCard />
            <StudyCard />
            <StudyCard />
          </LandingCards>
          <SubBannerWrapper>
            <SubBanner />
          </SubBannerWrapper>
          <LandingCards>
            <StudyCard />
            <StudyCard />
            <StudyCard />
          </LandingCards>
        </ProjectContainer>
      </ContentsContainer>
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

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin-top: 80px;
`;

const PopularContainer = styled.section`
  margin-bottom: 135px;
  & > div:nth-child(1) {
    margin-bottom: 66px;
  }
`;
const StudyContainer = styled.section`
  margin-bottom: 108px;
  & > div:nth-child(1) {
    margin-bottom: 66px;
  }
`;
const ProjectContainer = styled.section`
  & > div:nth-child(1) {
    margin-bottom: 40px;
  }
`;

const LandingCards = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const SubBannerWrapper = styled.div`
  margin: 80px 0;
`;

const NewStudy = styled.div``;
