import type { NextPage } from "next";
import styled from "styled-components";

import Banner from "../components/common/Banner";

const Home: NextPage = () => {
  return (
    <HomeContainer>
      <Banner />
      <ContentsContainer></ContentsContainer>
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
