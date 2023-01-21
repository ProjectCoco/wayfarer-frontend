import React from "react";
import styled from "styled-components";
import { StudyPost } from "../../../pages/study";
import SmallCard from "../../common/Cards/SmallCard";

interface SmallCardsProps {
  data: StudyPost[];
}

const SmallStudyCards = ({ data }: SmallCardsProps) => {
  return (
    <SmallCardsContainer>
      {data.map((data) => (
        <SmallCard
          key={data.studyArticleId}
          members={data.studyMemberResponses}
          tags={data.studyTags}
          startTime={data.startTime}
          title={data.title}
          type="study"
        />
      ))}
    </SmallCardsContainer>
  );
};

export default SmallStudyCards;

const SmallCardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 100px;
  grid-column-gap: 15px;
`;
