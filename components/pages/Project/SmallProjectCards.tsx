import React from "react";
import styled from "styled-components";
import { ProjectPost } from "../../../pages/project";
import SmallCard from "../../common/Cards/SmallCard";

interface SmallCardsProps {
  data: ProjectPost[];
}

const SmallProjectCards = ({ data }: SmallCardsProps) => {
  return (
    <SmallCardsContainer>
      {data.map((data) => (
        <SmallCard
          key={data.projectArticleId}
          members={data.projectMemberResponses}
          skills={data.projectSkills}
          tags={data.projectTags}
          startTime={data.startTime}
          title={data.title}
          type="project"
        />
      ))}
    </SmallCardsContainer>
  );
};

export default SmallProjectCards;

const SmallCardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 100px;
  grid-column-gap: 15px;
`;
