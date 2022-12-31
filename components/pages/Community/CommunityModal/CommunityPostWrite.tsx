import React from "react";
import styled from "styled-components";
import useForm from "../../../../hooks/Write/useForm";
import Asterisk from "../../../common/Input/Asterisk";
import Label from "../../write/Label";
import LabelBlock from "../../write/LabelBlock";
import SubmitButton from "../../write/SubmitButton";
import TextArea from "../../write/TextArea";
import WriteInput from "../../write/WriteInput";

const CommunityWrite = () => {
  const { form, handleChange, handleSubmit } = useForm();

  return (
    <CommunityWriteContainer>
      <Form>
        <LabelBlock
          label={<Label label="토픽" icon={<Asterisk />} />}
          customInput={
            <WriteInput
              placeholder="토픽을 선택해주세요."
              value={form.summary}
              name={"topic"}
              onChange={handleChange}
            />
          }
        />
        <LabelBlock
          label={<Label label="제목" icon={<Asterisk />} />}
          customInput={
            <WriteInput
              placeholder="제목을 입력해주세요."
              value={form.title}
              name={"title"}
              onChange={handleChange}
            />
          }
        />
        <LabelBlock
          label={<Label label="소개" icon={<Asterisk />} />}
          customInput={
            <TextArea
              placeholder="내용을 입력해주세요."
              onChange={handleChange}
              value={form.content}
              name={"content"}
            />
          }
        />
        <SubmitButton />
      </Form>
    </CommunityWriteContainer>
  );
};

export default CommunityWrite;

const CommunityWriteContainer = styled.div`
  width: 100%;
  padding: 183.52px 57px 116.48px 43px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;

  button {
    border: none;
    border-radius: 6px;
    margin-top: 100px;
  }
`;
