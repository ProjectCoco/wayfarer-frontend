import React, { useState } from "react";
import styled from "styled-components";
import Banner from "../../components/common/Banner/Banner";
import SmallCards from "../../components/common/Cards/SmallCards";
import OccupationFilter from "../../components/common/OccupationFilter/OccupationFilter";
import RecruitToggle from "../../components/common/RecruitToggle/RecruitToggle";
import { FilterMenuType } from "../../utils/Filter";

const Study = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterMenuType>("전체");
  return (
    <StudyContainer>
      <Banner text={"모집글 작성하기"} />
      <InnerContainer>
        <OccupationFilter
          selected={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        <RecruitToggle />
        <SmallCards />
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
