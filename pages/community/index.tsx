import React, { useState } from "react";
import styled from "styled-components";
import Banner from "../../components/common/Banner/Banner";
import CommunityCardCarousel from "../../components/pages/Community/CommunityCards";
import CommunityInput from "../../components/pages/Community/CommunityInput";
import CommunityPostDetailModal from "../../components/pages/Community/CommunityModal/CommunityPostDetailModal";
import CommunityPosts from "../../components/pages/Community/CommunityPosts";
import CommunityTag from "../../components/pages/Community/CommunityTag";

const Community = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <CommunityContainer isModalOpened={isModalOpened}>
      {isModalOpened && (
        <CommunityPostDetailModal setIsModalOpened={setIsModalOpened} />
      )}
      <Banner text={"모집글 작성하기"} />
      <InnerContainer>
        <CommunityTag />
        <CommunityCardCarousel />
        <CommunityInput placeholder="혜민님, 어떤 이야기를 나누고 싶으세요?" />
        <CommunityPosts setIsModalOpened={setIsModalOpened} />
      </InnerContainer>
    </CommunityContainer>
  );
};

export default Community;

const CommunityContainer = styled.div<{ isModalOpened: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InnerContainer = styled.div`
  width: 1280px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
