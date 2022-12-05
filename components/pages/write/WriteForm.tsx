import React from "react";
import styled from "styled-components";
import WriteInput from "./WriteInput";
import Label from "./Label";
import LabelBlock from "./LabelBlock";
import Asterisk from "../../common/Input/Asterisk";

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
          <WriteInput placeholder="프로젝트의 제목을 입력해주세요." />
        }
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
