import React from "react";
import styled from "styled-components";

interface Props {
  tag: string;
}

function HashTag({ tag }: Props) {
  return (
    <TagBox>
      <p>#{tag}</p>
    </TagBox>
  );
}

export default HashTag;

const TagBox = styled.div`
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 22.54px;
    color: ${({ theme }) => theme.colors.gray_500};
  }
`;
