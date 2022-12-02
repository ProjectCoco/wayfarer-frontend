import React from "react";
import styled from "styled-components";
import DropDownInput from "./DropDownInput";
import LabelCheck from "./LabelCheck";
import LabelInput from "./LabelInput";
import ModalButton from "../ModalButton";
import Image from "next/image";
import ArrowIcon from "../../../public/common/btn_arrow.svg";
import useSignUpForm from "../../../hooks/Signup/useSignUpForm";
import useChecked from "../../../hooks/Signup/useChecked";
import DialogHeader from "../SignIn/DialogHeader";

function SignUpDialog() {
  const { form, handleInputChange, handleSubmit, handleDropClick } =
    useSignUpForm();
  const { check, handleCheck, handleAllCheck } = useChecked();
  console.log(form);
  return (
    <>
      <DialogHeader
        title="회원가입"
        subTitle="잠깐, 몇가지 정보가 더 필요해요 :)"
      />
      <InputForm
        onSubmit={(e) => {
          e.preventDefault();
          if (!check.check1_required || !check.check2_required) {
            return alert("필수 항목이 다 체크되지 않았습니다.");
          }
          handleSubmit(e);
        }}
      >
        <LabelInput
          label="닉네임"
          name="nickname"
          placeholder="별명을 입력해 주세요."
          value={form.nickname}
          onChange={handleInputChange}
        />
        <DropDownInput
          handleDropClick={handleDropClick}
          value={form.Interests}
        />
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
            RightIcon={<Image src={ArrowIcon} alt="RightArrowIcon" />}
          />
          <LabelCheck
            label="(필수) 개인정보 수집 및 이용 동의"
            name="check2_required"
            checked={check.check2_required}
            onChange={handleCheck}
            RightIcon={<Image src={ArrowIcon} alt="RightArrowIcon" />}
          />
          <LabelCheck
            label="(선택) 마케팅 및 이벤트 정보 수신 동의"
            name="check3"
            checked={check.check3}
            onChange={handleCheck}
          />
        </CheckBoxBlock>
        <ModalButton
          title="가입하기"
          isAllFill={form.nickname !== "" && form.Interests !== ""}
        />
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
