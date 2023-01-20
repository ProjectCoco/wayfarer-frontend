import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { axiosInstance } from "../../apis/axiosInstance";
import Banner from "../../components/common/Banner/Banner";
import SmallCards from "../../components/common/Cards/SmallCards";
import OccupationFilter from "../../components/common/OccupationFilter/OccupationFilter";
import RecruitToggle from "../../components/common/RecruitToggle/RecruitToggle";
import { FilterMenuType } from "../../utils/Filter";

interface StudyMember {
  studyMemberId: number;
  position: string;
  totalMember: number;
}

interface StudyPost {
  createdTime: string;
  studyArticleId: number;
  studyMemberResponses: StudyMember[];
  studyTags: string[];
  title: string;
}

const Study = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterMenuType>("전체");
  const [isToggled, setIsToggled] = useState(false);

  const getStudyList = async (page: number, status: boolean) => {
    try {
      const response = await axiosInstance.get(
        `/study?page=${page}&status=${status}`
      );

      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error("프로젝트 목록 조회 실패");
    }
  };

  useEffect(() => {
    getStudyList(1, true);
  }, []);

  return (
    <StudyContainer>
      <Banner text={"모집글 작성하기"} />
      <InnerContainer>
        <OccupationFilter
          selected={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        <RecruitToggle isToggled={isToggled} setIsToggled={setIsToggled} />
        {/* <SmallCards /> */}
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
