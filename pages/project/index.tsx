import React, { useState } from "react";
import styled from "styled-components";
import { FilterMenuType } from "../../utils/Filter";
import Banner from "../../components/common/Banner/Banner";
import SmallCards from "../../components/common/Cards/SmallCards";
import OccupationFilter from "../../components/common/OccupationFilter/OccupationFilter";
import TechStackFilter from "../../components/pages/Project/TechStackFilter";
import RecruitToggle from "../../components/common/RecruitToggle/RecruitToggle";

const Project = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterMenuType>("전체");

  return (
    <ProjectContainer>
      <Banner text={"모집글 작성하기"} />
      <InnerContainer>
        <OccupationFilter
          selected={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        <TechStackFilter occupation={selectedFilter} />
        <RecruitToggle />
        <SmallCards />
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
