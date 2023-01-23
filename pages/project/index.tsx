import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FilterMenuType } from "../../utils/Filter";
import Banner from "../../components/common/Banner/Banner";
import OccupationFilter from "../../components/common/OccupationFilter/OccupationFilter";
import TechStackFilter from "../../components/pages/Project/TechStackFilter";
import RecruitToggle from "../../components/common/RecruitToggle/RecruitToggle";
import { getProjectList } from "../../apis/axiosInstance";
import SmallProjectCards from "../../components/pages/Project/SmallProjectCards";
import useToggle from "../../hooks/RecruitToggle/useToggle";

export interface ProjectMember {
  projectArticleId: number;
  position: string;
  totalMember: number;
}

export interface ProjectPost {
  createdTime: string;
  projectArticleId: number;
  projectMemberResponses: ProjectMember[];
  projectSkills: string[];
  projectTags: string[];
  startTime: string;
  status: "PROCEED" | "COMPLETE";
  title: string;
}

const Project = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterMenuType>("전체");
  const [projectList, setProjectList] = useState<ProjectPost[]>();
  const { isToggled, handleToggleButtonClick } = useToggle();

  useEffect(() => {
    getProjectList(1, isToggled).then((res) => setProjectList(res.data));
  }, [isToggled]);

  if (!projectList) return <div>Loading...</div>;
  return (
    <ProjectContainer>
      <Banner text={"모집글 작성하기"} />
      <InnerContainer>
        <OccupationFilter
          selected={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        <TechStackFilter occupation={selectedFilter} />
        <RecruitToggle
          isToggled={isToggled}
          handleToggleButtonClick={handleToggleButtonClick}
        />
        <SmallProjectCards data={projectList} />
      </InnerContainer>
    </ProjectContainer>
  );
};

export default Project;

const ProjectContainer = styled.div`
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
