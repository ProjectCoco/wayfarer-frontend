import React from "react";
import styled from "styled-components";

interface Props {
  active: boolean;
  tagName: string;
  tagActivate: (tagName: string) => void;
}

function TechNameTag({ active, tagName, tagActivate }: Props) {
  return (
    <Container active={active} onClick={() => tagActivate(tagName)}>
      <p>{tagName}</p>
    </Container>
  );
}

export default TechNameTag;

const Container = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 95px;
  height: 43px;
  border-radius: 48px;
  border: solid 1px
    ${({ theme, active }) =>
      active ? theme.colors.sub_blue4 : theme.colors.gray_500};
  cursor: pointer;

  p {
    padding: 10px 22px;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: ${({ theme, active }) =>
      active ? theme.colors.sub_blue4 : theme.colors.gray_500};
    white-space: nowrap;
  }
`;
