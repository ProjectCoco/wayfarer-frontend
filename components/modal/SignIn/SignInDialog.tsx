import React from "react";
import styled from "styled-components";
import ButtonBox from "./ButtonBox";
import DialogHeader from "./DialogHeader";
import SocialButton from "./SocialButton";

function SignInDialog() {
  return (
    <>
      <DialogHeader
        title={"회원가입"}
        subTitle={"웨이페어에 오신것을 환영합니다 :)"}
      />
      <Main></Main>
      <ButtonBox />
    </>
  );
}

export default SignInDialog;

const Main = styled.div`
  width: 100%;
  height: 300px;
`;
