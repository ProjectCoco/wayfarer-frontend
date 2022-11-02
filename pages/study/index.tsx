import React, { useState } from "react";
import styled from "styled-components";
import RecruitToggle from "../../components/common/RecruitToggle";
import TechNameTag from "../../components/common/TechNameTag";
import { TabMenus, TabTechStacks, TabMenuType } from "../../utils/studyTabMenu";

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
    <div>
      <RecruitBox>
        <RecruitTitle>모집 중</RecruitTitle>
        <RecruitToggle toggle={toggle} setToggle={setToggle} />
      </RecruitBox>
      <TabMenuBox>
        {TabMenus.map((menu) => (
          <TabMenu
            key={menu}
            onClick={() => {
              setTabMenu(menu);
              setCurrentTag(TabTechStacks[menu]);
              console.log(TabTechStacks[menu]);
            }}
            active={tabMenu === menu}
          >
            {menu}
          </TabMenu>
        ))}
      </TabMenuBox>
      <TechTagNameBox>
        {Object.keys(currentTag).map((tag) => (
          <TechNameTag
            key={tag}
            tagName={tag}
            active={currentTag[tag]}
            tagActivate={tagActivate}
          />
        ))}
      </TechTagNameBox>
    </div>
  );
}

export default Study;

const RecruitBox = styled.div`
  display: flex;
  align-items: center;
  gap: 11.8px;
`;

const RecruitTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.gray_700};
`;

const TabMenuBox = styled.div`
  display: flex;
  gap: 84px;
  margin-top: 27px;
`;

const TabMenu = styled.h2<{ active: boolean }>`
  font-weight: 400;
  font-size: 30px;
  line-height: 38px;
  color: ${({ theme, active }) =>
    active ? theme.colors.gray_700 : theme.colors.gray_500};
  cursor: pointer;
  white-space: nowrap;
`;

const TechTagNameBox = styled.div`
  margin-top: 49px;
  display: flex;
  flex-wrap: wrap;
  gap: 64px;
`;
