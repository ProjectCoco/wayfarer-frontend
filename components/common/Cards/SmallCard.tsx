import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { BigCardProps } from "../../pages/Home/BigCards";
import {
  SmallCardsImg,
  SmallCardsImgType,
} from "../../../public/Cards/SmallCards";
import SmallCardHover from "./SmallCardHover";
import { ProjectMember } from "../../../pages/project";
import { StudyMember } from "../../../pages/study";

interface SmallCardProps {
  members: ProjectMember[] | StudyMember[];
  tags: string[];
  startTime: string;
  title: string;
  type: "project" | "study";
  skills?: string[];
}

const SmallCard = ({
  members,
  tags,
  startTime,
  title,
  type,
  skills,
}: SmallCardProps) => {
  const [isHover, setIsHover] = useState(false);

  const getPosition = (members: ProjectMember[] | StudyMember[]) => {
    let membersPositions = members.map((member) => member.position);
    let positionList = ["frontend", "backend", "planner", "designer"];

    if (positionList.length === 1) {
      for (let i = 0; i < positionList.length; i++) {
        if (
          membersPositions[0] === positionList[0] ||
          membersPositions[0] === positionList[1]
        )
          return "developer";
        else return positionList[i];
      }
    } else if (
      membersPositions.length === 2 &&
      membersPositions.includes("frontend") &&
      membersPositions.includes("backend")
    )
      return "developer";

    return "all";
  };

  const selectCardImg = (type: string, occupation: string) => {
    return Object.keys(SmallCardsImg).filter(
      (cardName) =>
        cardName.includes(type) && cardName.includes("_" + occupation)
    )[0];
  };

  const position = getPosition(members);

  return (
    <CardContainer>
      <Card
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {isHover ? (
          <SmallCardHover skills={skills} members={members} title={title} />
        ) : (
          <Image
            src={
              SmallCardsImg[selectCardImg(type, position) as SmallCardsImgType]
            }
            alt={`${position}Card`}
          />
        )}
      </Card>
      <Text>
        <ProjectTitle>{title}</ProjectTitle>
        <Tags>
          <Tag>
            {tags.map((el, idx) => (
              <div key={idx}>#{el}</div>
            ))}
          </Tag>
          <div>{startTime.slice(5, 10).replace("-", ".")}</div>
        </Tags>
      </Text>
    </CardContainer>
  );
};

export default SmallCard;

const CardContainer = styled.div`
  width: 417px;
  height: 366px;
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  margin-bottom: 25px;
  display: block;
  width: 100%;
  line-height: 0;
  height: 200px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const ProjectTitle = styled.div`
  font-size: 25px;
  line-height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Tags = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: #999999;
  display: flex;
  gap: 8px;
`;

const Tag = styled.div`
  display: flex;
  gap: 8px;
`;
