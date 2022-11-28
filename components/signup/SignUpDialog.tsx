import React from "react";
import styled from "styled-components";
import CheckBox from "../common/Input/CheckBox";
import DialogHeader from "../signin/DialogHeader";
import LabelCheck from "./LabelCheck";
import LabelInput from "./LabelInput";
import SubmitButton from "./SubmitButton";

function SignUpDialog() {
  return (
    <>
      <DialogHeader
        title="회원가입"
        subTitle="잠깐, 몇가지 정보가 더 필요해요 :)"
      />
      <InputBox>
        <LabelInput label="닉네임" placeholder="별명을 입력해 주세요." />
        <LabelInput label="관심분야" placeholder="관심분야를 선택해 주세요." />
      </InputBox>
      <CheckBoxBlock>
        <LabelCheck label="전체동의" />
        <LabelCheck label="(필수) 서비스 이용약관 동의" />
        <LabelCheck label="(필수) 개인정보 수집 및 이용 동의" />
        <LabelCheck label="(선택) 마케팅 및 이벤트 정보 수신 동의" />
      </CheckBoxBlock>
      <SubmitButton />
    </>
  );
}

export default SignUpDialog;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
  margin-top: 150px;
`;

const CheckBoxBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 45px;
  margin-bottom: 48px;
`;
