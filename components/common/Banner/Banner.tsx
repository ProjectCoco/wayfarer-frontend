import React from "react";
import styled from "styled-components";
import BannerImg from "../../../public/Banner/MainBanner.svg";
import BannerButton from "./BannerButton";

interface Props {
  text: string;
}

const Banner = ({ text }: Props) => {
  return (
    <BannerContainer>
      <BannerButton text={text} />
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${BannerImg.src});
  background-position: center;
  display: flex;
  justify-content: center;
  position: relative;

  button {
    bottom: 102.99px;
    height: 50px;
    padding: 13px 24px;
    font-weight: 600;
  }
`;
