import React from "react";
import styled from "styled-components";
import SocialButton from "./SocialButton";
import GoogleIcon from "../../public/social/google.svg";
import KakaoIcon from "../../public/social/kakao.svg";
import NaverIcon from "../../public/social/naver.svg";

function ButtonBox() {
  return (
    <Block>
      <SocialButton
        text="네이버로 가입하기"
        bgColor="#3FD823"
        color="white"
        icon={NaverIcon}
        onClick={() => console.log("네이버로그인")}
      />
      <SocialButton
        text="카카오로 가입하기"
        bgColor="#FFE94D"
        color="black"
        icon={KakaoIcon}
        onClick={() => console.log("카카오로그인")}
      />
      <SocialButton
        text="구글로 가입하기"
        bgColor="#FFFFFF"
        color="black"
        icon={GoogleIcon}
        border="1px solid #C2C2C2"
        onClick={() => console.log("구글로그인")}
      />
    </Block>
  );
}

export default ButtonBox;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
