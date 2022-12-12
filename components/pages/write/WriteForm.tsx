import React from "react";
import styled from "styled-components";
import WriteInput from "./WriteInput";
import Label from "./Label";
import LabelBlock from "./LabelBlock";
import Asterisk from "../../common/Input/Asterisk";
import TagInput from "./TagInput";
import TextArea from "./TextArea";
import DropDown from "./DropDown";
import DropDownIcon from "./DropDownIcon";

function WriteForm() {
  return (
    <Form>
      <LabelBlock
        label={<Label label="제목" icon={<Asterisk />} />}
        customInput={
          <WriteInput placeholder="프로젝트의 제목을 입력해주세요." />
        }
      />
      <LabelBlock
        label={<Label label="요약" />}
        customInput={
          <TagInput placeholder="#프로젝트를 키워드로 표현해주세요 (최대 5개 입력)" />
        }
      />
      <LabelBlock
        label={<Label label="모집인원" icon={<Asterisk />} />}
        customInput={<DropDown icon={<DropDownIcon />} width={"102px"} />}
      />
      <LabelBlock
        label={<Label label="기술/언어" icon={<Asterisk />} />}
        customInput={<TagInput placeholder="#기술언어를 입력해주세요." />}
      />
      <LabelBlock
        label={<Label label="소개" icon={<Asterisk />} />}
        customInput={<TextArea />}
      />
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
