import React from "react";
import styled from "styled-components";

const TextAreaPlaceHolder = `프로젝트에 대한 설명들을 자세히 담아주세요.
아래의 내용들을 포함하면 더 좋아요 :)
  
  ✔︎ 현재 팀 구성 
  ✔ 회의 진행방식 및 횟수 
  ✔︎ 기술 및 언어 
  ✔︎ 프로젝트 관련 링크 
  ✔ 프로젝트 동기 등
`;

function TextArea() {
  return (
    <StyledTextArea placeholder={TextAreaPlaceHolder}>TextArea</StyledTextArea>
  );
}

export default TextArea;

const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 295px;
  border: none;
  resize: none;

  &::placeholder {
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    letter-spacing: -0.03em;
    color: #222222;
    opacity: 0.3;
  }

  &:focus {
    outline: none;
  }
`;
