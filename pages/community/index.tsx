import React, { useState } from "react";
import styled from "styled-components";
import Banner from "../../components/common/Banner/Banner";
import CommunityCardCarousel from "../../components/pages/Community/CommunityCards";
import CommunityInput from "../../components/pages/Community/CommunityInput";
import CommunityPosts from "../../components/pages/Community/CommunityPosts";
import CommunityTag from "../../components/pages/Community/CommunityTag";

const Community = () => {
  return (
    <CommunityContainer>
      <Banner text={"모집글 작성하기"} />
      <InnerContainer>
        <CommunityTag />
        <CommunityCardCarousel />
        <CommunityInput />
        <CommunityPosts />
      </InnerContainer>
    </CommunityContainer>
  );
};

export default Community;

const CommunityContainer = styled.div`
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
