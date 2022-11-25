import React, { useState } from "react";
import styled from "styled-components";
import RecruitToggle from "../../components/common/RecruitToggle";
import StudyCard from "../../components/common/StudyCard";
import TechNameTag from "../../components/common/TechNameTag";
import { TabMenus, TabTechStacks, TabMenuType } from "../../utils/studyTabMenu";
import Image from "next/image";
import BannerImg from "../../public/Banner/Banner.svg";
import Banner from "../../components/common/Banner";

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
      <Banner />
      <InnerContainer>
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
        <StudyCards>
          <StudyCard />
          <StudyCard />
          <StudyCard />
          <StudyCard />
          <StudyCard />
          <StudyCard />
        </StudyCards>
      </InnerContainer>
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

const StudyCards = styled.section`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 41px;
  margin-bottom: 80px;
`;
