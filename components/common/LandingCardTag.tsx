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
  padding: 4px 8px;
  border: solid 1px gray;
  width: fit-content;
  border-radius: 6px;

  p {
    color: ${(props) =>
      props.mode === "HOT" ? props.theme.colors.sub_blue3 : "blue"};
  }
`;
