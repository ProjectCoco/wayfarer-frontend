import React from "react";
import styled from "styled-components";
import { ProjectMember } from "../../../pages/project";
import { StudyMember } from "../../../pages/study";
import SmallLikeButton from "./SmallLikeButton";

interface SmallCardHoverProps {
  skills?: string[];
  members: ProjectMember[] | StudyMember[];
  title: string;
}

const SmallCardHover = ({ skills, members, title }: SmallCardHoverProps) => {
  return (
    <CardContainer>
      <CardImg>
        <ProjectHeader>
          <span>{title.length < 19 ? title : `${title.slice(0, 18)}...`}</span>
          <SmallLikeButton like={false} /> {/* like props 추가 적용 필요 */}
        </ProjectHeader>
        <ProjectMemeber>
          {members
            .map(
              (member) =>
                `${
                  member.position[0].toUpperCase() + member.position.slice(1)
                }(${member.totalMember})`
            )
            .join(" / ")}
        </ProjectMemeber>
        {skills ? (
          <Stacks>
            {skills.slice(0, 4).map((el, idx) => (
              <div key={idx}>{el[0]}</div>
            ))}
            <span>{skills.length > 4 ? ` + ${skills.length - 4}` : ""}</span>
          </Stacks>
        ) : (
          <div></div>
        )}
      </CardImg>
    </CardContainer>
  );
};

export default SmallCardHover;

const CardContainer = styled.div``;

const CardImg = styled.div`
  width: 417px;
  height: 199.5px;
  color: #ffffff;
  background-color: ${(props) => props.theme.colors.Cosmic_black};
  border-radius: 10px;
  padding: 30px 33px;
  font-size: 25px;

  img {
    object-fit: cover;
  }
`;

const ProjectHeader = styled.div`
  color: ${(props) => props.theme.colors.gray100};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ProjectMemeber = styled.div`
  color: ${(props) => props.theme.colors.gray300};
  font-size: 17px;
  margin-bottom: 50px;
`;

const Stacks = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  color: ${(props) => props.theme.colors.gray300};

  div {
    background-color: ${(props) => props.theme.colors.Main_blue};
    color: #ffffff;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    font-size: 17px;
  }
`;
