import Image from "next/image";
import React from "react";
import styled from "styled-components";
import SubBannerImg from "../../../public/Banner/SubBanner.svg";
import BannerButton from "./BannerButton";

const SubBanner = () => {
  return (
    <SubBannerContainer>
      <BannerButton text={"모집글 작성하기"} />
    </SubBannerContainer>
  );
};

export default SubBanner;

const SubBannerContainer = styled.div`
  width: 1281px;
  height: 135.97px;
  background-image: url(${SubBannerImg.src});
  margin-top: 204.84px;
  margin-bottom: 248.96px;
  position: relative;

  button {
    top: 42.74px;
    right: 71.96px;
    height: 50.49px;
    padding: 13.24px 20.57px;
    font-weight: 400;
  }
`;
