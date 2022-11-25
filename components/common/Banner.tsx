import React from "react";
import styled from "styled-components";
import BannerImg from "../../public/Banner/MainBanner.svg";

const Banner = () => {
  return <BannerContainer></BannerContainer>;
};

export default Banner;

const BannerContainer = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${BannerImg.src});
  display: flex;
  justify-content: center;
`;
