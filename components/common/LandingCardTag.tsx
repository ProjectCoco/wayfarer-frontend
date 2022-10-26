import React from "react";
import styled from "styled-components";

// https://engineering.linecorp.com/ko/blog/typescript-enum-tree-shaking/

const TagMode = {
  HOT: "HOT",
  RECRUIT: "모집중",
} as const;

type TagMode = typeof TagMode[keyof typeof TagMode];

interface Props {
  mode: TagMode;
}

function LandingCardTag({ mode }: Props) {
  return (
    <TagBox mode={mode}>
      <p>{mode}</p>
    </TagBox>
  );
}

export default LandingCardTag;

const TagBox = styled.div<{ mode: TagMode }>`
  width: fit-content;
  padding: 4px 8px;
  border-radius: 6px;
  border: solid 1px
    ${({ mode, theme }) =>
      mode === "HOT" ? theme.colors.sub_blue3 : theme.colors.gray_500};

  p {
    color: ${({ mode, theme }) =>
      mode === "HOT" ? theme.colors.sub_blue3 : theme.colors.gray_600};
  }
`;
