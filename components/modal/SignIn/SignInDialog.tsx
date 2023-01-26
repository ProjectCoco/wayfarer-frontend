import React from "react";
import styled from "styled-components";
import ButtonBox from "./ButtonBox";
import DialogHeader from "./DialogHeader";

function SignInDialog() {
  return (
    <>
      <DialogHeader
        title={"회원가입"}
        subTitle={"웨이페어에 오신것을 환영합니다 :)"}
      />
      <Blank />
      <ButtonBox />
    </>
  );
}

export default SignInDialog;

const Blank = styled.div`
  width: 100%;
  height: 150px;
`;
