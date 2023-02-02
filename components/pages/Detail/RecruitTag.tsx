import React from "react";
import styled from "styled-components";

function RecruitTag() {
  return (
    <Tag>
      <p>모집중</p>
    </Tag>
  );
}

export default RecruitTag;

const Tag = styled.div`
  width: 57px;
  height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e7f3fb;
  border-radius: 6px;

  p {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #0e4cfa;
  }
`;
