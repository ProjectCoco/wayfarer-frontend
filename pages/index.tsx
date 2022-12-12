import type { NextPage } from "next";
import styled from "styled-components";
import Banner from "../components/common/Banner/Banner";
import SubBanner from "../components/common/Banner/SubBanner";
import BigCards from "../components/pages/Home/BigCards";

const Home: NextPage = () => {
  return (
    <HomeContainer>
      <Banner text={"모집글 작성하기"} />
      <ContentsContainer>
        <BigCards title={"지금 뜨는 사이드 프로젝트 보러 갈까요? 🚀"} />
        <BigCards title={"따끈따끈한 신규 스터디 구경해보세요 👀"} />
        <BigCards title={"지금 당신에게 필요한 인사이트 ✏️"} />
      </ContentsContainer>
      <SubBanner />
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
  width: 1280px;
  margin-top: 68.23px;
  gap: 193.22px;
`;
