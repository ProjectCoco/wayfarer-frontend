import React, { useState } from "react";
import styled from "styled-components";
import useTagClick from "../../../hooks/FilterTag/useTagClick";
import FilterTag from "../../common/FilterTag/FilterTag";

interface CommunityTabMenus {
  [key: string]: boolean;
}

const CommunityTabMenus: CommunityTabMenus = {
  추천: false,
  ["Q&A"]: false,
  채용소식: false,
  회사생활: false,
  커리어고민: false,
  인간관계: false,
  이직: false,
  취미생활: false,
};

const CommunityTag = () => {
  const { tagList, handleTagClick } = useTagClick(CommunityTabMenus);

  return (
    <CommunityTagContainer>
      {Object.keys(CommunityTabMenus).map((tagName) => (
        <FilterTag
          text={tagName}
          key={tagName}
          className={tagList[tagName] ? "selected" : ""}
          onClick={() => handleTagClick(tagName)}
        />
      ))}
    </CommunityTagContainer>
  );
};

export default CommunityTag;

const CommunityTagContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;

  .selected {
    background-color: ${(props) => props.theme.colors.Cosmic_black};
    color: ${(props) => props.theme.colors.gray200};
  }
`;
