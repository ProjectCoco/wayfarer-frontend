import Image from "next/image";
import React from "react";
import styled from "styled-components";
import LikeImg from "../../../public/Cards/BigCards/Like.svg";

const projectData = {
  name: "[프로젝트] 플러터",
  title: "덕질 아카이빙 서비스 '플러터'의 멤버를 모집합니다",
  memeber: "프론트엔드(1) / 백엔드(2) / UX UI 디자이너(1)",
  tag: ["덕질", "어덕행덕", "OTT", "개발자", "개발자"],
  stack: ["a", "f", "k", "i", "r", "t"],
  period: "11.2~12.3",
};

const BigCardHover = () => {
  return (
    <CardContainer>
      <CardImg>
        <ProjectHeader>
          <span>{projectData.name}</span>
          <Image src={LikeImg} alt="Like" />
        </ProjectHeader>
        <ProjectMemeber>{projectData.memeber}</ProjectMemeber>
        <Stacks>
          {projectData.stack.slice(0, 4).map((el, idx) => (
            <div key={idx}>{el}</div>
          ))}
          + {projectData.stack.length - 4}
        </Stacks>
      </CardImg>
    </CardContainer>
  );
};

export default BigCardHover;

const CardContainer = styled.div``;

const CardImg = styled.div`
  width: 633px;
  height: 300px;
  color: #ffffff;
  background-color: ${(props) => props.theme.colors.Cosmic_black};
  border-radius: 10px;
  padding: 35.37px 32px;
`;

const ProjectHeader = styled.div`
  font-size: ${(props) => props.theme.fontSize.text_5xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
`;

const ProjectMemeber = styled.div`
  color: ${(props) => props.theme.colors.gray300};
  font-size: 25px;
  margin-bottom: 90px;
`;

const Stacks = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  color: ${(props) => props.theme.colors.gray300};

  div {
    background-color: ${(props) => props.theme.colors.Main_blue};
    color: #ffffff;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
  }
`;

const Stack = styled.div``;
