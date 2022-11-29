import React from "react";
import styled from "styled-components";
import useChecked from "../../hooks/Signup/useChecked";
import useSignUpForm from "../../hooks/Signup/useSignupForm";
import DialogHeader from "../signin/DialogHeader";
import LabelCheck from "./LabelCheck";
import LabelInput from "./LabelInput";
import SubmitButton from "./SubmitButton";

function SignUpDialog() {
  const { form, handleInputChange, handleSubmit } = useSignUpForm();
  const { check, handleCheck, handleAllCheck } = useChecked();
  console.log(form);
  return (
    <>
      <DialogHeader
        title="회원가입"
        subTitle="잠깐, 몇가지 정보가 더 필요해요 :)"
      />
      <InputForm onSubmit={handleSubmit}>
        <LabelInput
          label="닉네임"
          name="nickname"
          placeholder="별명을 입력해 주세요."
          value={form.nickname}
          onChange={handleInputChange}
        />
        <LabelInput label="관심분야" placeholder="관심분야를 선택해 주세요." />
        <CheckBoxBlock>
          <LabelCheck
            label="전체동의"
            name="all"
            checked={check.all}
            onChange={handleAllCheck}
          />
          <LabelCheck
            label="(필수) 서비스 이용약관 동의"
            name="check1_required"
            checked={check.check1_required}
            onChange={handleCheck}
          />
          <LabelCheck
            label="(필수) 개인정보 수집 및 이용 동의"
            name="check2_required"
            checked={check.check2_required}
            onChange={handleCheck}
          />
          <LabelCheck
            label="(선택) 마케팅 및 이벤트 정보 수신 동의"
            name="check3"
            checked={check.check3}
            onChange={handleCheck}
          />
        </CheckBoxBlock>
        <SubmitButton />
      </InputForm>
    </>
  );
}

export default SignUpDialog;

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 45px;
  margin-top: 150px;
`;

const CheckBoxBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
