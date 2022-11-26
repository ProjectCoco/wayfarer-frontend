import React, { useState } from "react";
import styled from "styled-components";
import { TabMenus, TabTechStacks, TabMenuType } from "../../utils/studyTabMenu";
import Banner from "../../components/common/Banner/Banner";

function Study() {
  const [toggle, setToggle] = useState(false);
  const [tabMenu, setTabMenu] = useState<TabMenuType>("전체");
  const [currentTag, setCurrentTag] = useState<any>(TabTechStacks[tabMenu]);

  const tagActivate = (tagName: string) => {
    setCurrentTag((prev: any) => {
      return {
        ...prev,
        [tagName]: !prev[tagName],
      };
    });
  };

  return (
    <StudyContainer>
      <Banner text={"모집글 작성하기"} />
      <InnerContainer></InnerContainer>
    </StudyContainer>
  );
}

export default Study;

const StudyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InnerContainer = styled.div`
  width: 1200px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
`;
