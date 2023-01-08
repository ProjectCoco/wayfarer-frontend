/* eslint-disable react/jsx-key */
import React from "react";
import styled from "styled-components";
import WriteInput from "./WriteInput";
import Label from "./Label";
import LabelBlock from "./LabelBlock";
import Asterisk from "../../common/Input/Asterisk";
import TagInput from "./TagInput";
import TextArea from "./TextArea";
import DropDown from "./DropDown";
import {
  getYear,
  jobGroup,
  recruitNumber,
  getMonth,
  getDay,
} from "../../../utils/writeMenu";
import DropDownList from "./DropDownList";
import useForm from "../../../hooks/Write/useProjectForm";
import SubmitButton from "./SubmitButton";
import AddPeople from "./AddPeople";

function WriteForm() {
  const {
    form,
    memberNum,
    handleChange,
    handleAddTag,
    handleRemoveTag,
    handleDateChange,
    handleSubmit,
    handleAddMember,
  } = useForm();
  console.info(memberNum);
  return (
    <Form onSubmit={handleSubmit}>
      <LabelBlock
        label={<Label label="제목" icon={<Asterisk />} />}
        customInput={
          <WriteInput
            placeholder="프로젝트의 제목을 입력해주세요."
            value={form.title}
            name={"title"}
            onChange={handleChange}
          />
        }
      />
      <LabelBlock
        label={<Label label="요약" />}
        customInput={
          <TagInput
            placeholder="#프로젝트를 키워드로 표현해주세요 (최대 5개 입력)"
            type="summary"
            handleAddTag={handleAddTag}
            handleRemoveTag={handleRemoveTag}
            tags={form.summary}
          />
        }
      />
      <LabelBlock
        label={<Label label="모집인원" icon={<Asterisk />} />}
        customInput={
          <FlexBox>
            <FlexBox1>
              {Array.from({ length: memberNum }).map(() => (
                <DropDownList
                  icons={[
                    <DropDown
                      width="102px"
                      menuItems={jobGroup}
                      defaultValue="직군 선택하기"
                      handleClick={() => console.log("직군")}
                    />,
                    <DropDown
                      width="41px"
                      menuItems={recruitNumber}
                      defaultValue="1명"
                      handleClick={() => console.log("인원")}
                    />,
                  ]}
                />
              ))}
            </FlexBox1>
            <AddPeople onClick={() => handleAddMember()} />
          </FlexBox>
        }
      />
      <LabelBlock
        label={<Label label="기술/언어" icon={<Asterisk />} />}
        customInput={
          <TagInput
            placeholder="#기술언어를 입력해주세요."
            type="tech"
            handleAddTag={handleAddTag}
            handleRemoveTag={handleRemoveTag}
            tags={form.tech}
          />
        }
      />
      <LabelBlock
        label={<Label label="시작일" icon={<Asterisk />} />}
        customInput={
          <DropDownList
            icons={[
              <DropDown
                width="64px"
                menuItems={getYear()}
                defaultValue={"YYYY년"}
                value={form.start[0]}
                handleClick={(date: string) => {
                  handleDateChange(date, "year");
                }}
              />,
              <DropDown
                width="56px"
                menuItems={getMonth}
                defaultValue={"MM월"}
                value={form.start[1]}
                handleClick={(date: string) => {
                  handleDateChange(date, "month");
                }}
              />,
              <DropDown
                width="51px"
                menuItems={getDay}
                defaultValue={"DD일"}
                value={form.start[2]}
                handleClick={(date: string) => {
                  handleDateChange(date, "day");
                }}
              />,
            ]}
          />
        }
      />
      <LabelBlock
        label={<Label label="소개" icon={<Asterisk />} />}
        customInput={
          <TextArea
            onChange={handleChange}
            value={form.content}
            name={"content"}
          />
        }
      />
      <SubmitButton />
    </Form>
  );
}

export default WriteForm;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const FlexBox1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;