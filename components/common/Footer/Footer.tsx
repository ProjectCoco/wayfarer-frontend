import React from "react";
import styled from "styled-components";
import Image from "next/image";
import LogoImg from "../../../public/Logo/FooterLogo.svg";
import { SocialNetworksImg } from "../../../public/Footer";

const Footer = () => {
  return (
    <FooterContainer>
      <FoooterContents>
        <LogoArea>
          <Image src={LogoImg} alt="Logo" />
          <span>새로운 시작, 새로운 만남</span>
        </LogoArea>
        <LinkArea>
          <Menus>
            <div>사이드 프로젝트</div>
            <div>스터디</div>
            <div>커뮤니티</div>
          </Menus>
          <SocialNetworks>
            <Image src={SocialNetworksImg.instagram} alt="instagram" />
            <Image src={SocialNetworksImg.facebook} alt="facebook" />
            <Image src={SocialNetworksImg.youtube} alt="youtube" />
          </SocialNetworks>
        </LinkArea>
      </FoooterContents>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 500px;
`;

const FoooterContents = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 279px;
  width: 1280px;
  font-size: ${(props) => props.theme.fontSize.text_xl};
  color: #999999;
`;

const LogoArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const LinkArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Menus = styled.div`
  display: flex;
  gap: 45px;

  div {
    cursor: pointer;
  }
`;

const SocialNetworks = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 29.41px;

  img {
    cursor: pointer;
  }
`;
