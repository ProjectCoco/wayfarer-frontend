import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getStudyList } from "../../apis/axiosInstance";
import Banner from "../../components/common/Banner/Banner";
import OccupationFilter from "../../components/common/OccupationFilter/OccupationFilter";
import RecruitToggle from "../../components/common/RecruitToggle/RecruitToggle";
import SmallStudyCards from "../../components/pages/Study/SmallStudyCards";
import useToggle from "../../hooks/RecruitToggle/useToggle";
import { FilterMenuType } from "../../utils/Filter";

export interface StudyMember {
  studyMemberId: number;
  position: string;
  totalMember: number;
}

export interface StudyPost {
  createdTime: string;
  startTime: string;
  studyArticleId: number;
  studyMemberResponses: StudyMember[];
  studyTags: string[];
  title: string;
}

const Study = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterMenuType>("전체");
  const [studyList, setStudyList] = useState<StudyPost[]>();
  const { isToggled, handleToggleButtonClick } = useToggle();

  useEffect(() => {
    getStudyList(1, isToggled).then((res) => setStudyList(res.data));
  }, [isToggled]);

  if (!studyList) return <div>Loading...</div>;
  return (
    <StudyContainer>
      <Banner text={"모집글 작성하기"} />
      <InnerContainer>
        <OccupationFilter
          selected={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        <RecruitToggle
          isToggled={isToggled}
          handleToggleButtonClick={handleToggleButtonClick}
        />
        <SmallStudyCards data={studyList} />
      </InnerContainer>
    </StudyContainer>
  );
};

export default Study;

const StudyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InnerContainer = styled.div`
  width: 1280px;
  margin-top: 99px;
  display: flex;
  flex-direction: column;
`;
