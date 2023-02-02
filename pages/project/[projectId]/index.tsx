import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import useProjectDetail from "../../../hooks/Fetch/useProjectDetail";
import ThreeDotIcon from "../../../public/Community/ThreeDots.svg";
import { koDtf } from "../../../utils/detail";
import RecruitTag from "../../../components/pages/Detail/RecruitTag";
import useDropDown from "../../../hooks/Write/useDropDown";

function ProjectDetail() {
  const { projectId } = useRouter().query;
  const { data: project } = useProjectDetail(+projectId!);
  const { isDrop, ref, handleChangeDrop } = useDropDown();

  console.log(project);

  if (!project) return <div>...Loading</div>;

  const createdDate = new Date(project.createdTime);

  return (
    <Container>
      <TitleSection>
        <Title>{project.title}</Title>
        {project.status === "PROCEED" ? <RecruitTag /> : <div>sdsd</div>}
      </TitleSection>
      <UserSection>
        <UserBox>
          <UserIcon></UserIcon>
          <User>
            <p>김개발119</p>
            <p>프론트엔드</p>
          </User>
        </UserBox>
        <Menu ref={ref}>
          {isDrop && <Modal>드롭</Modal>}
          <Image
            src={ThreeDotIcon}
            onClick={() => handleChangeDrop()}
            alt="three Dot Image"
          />
        </Menu>
      </UserSection>
      <Hr />
      <Detail>
        <RecruitMember>
          <h1>모집인원</h1>
          <p>
            {project.projectMemberResponses.map((obj, idx) => (
              <Member key={idx}>
                <p>{obj.position}</p>
                <CountMember>
                  <p>{obj.countMember}</p>
                  <p>/{obj.totalMember}</p>
                </CountMember>
              </Member>
            ))}
          </p>
        </RecruitMember>
        <TechStack>
          <h1>기술/언어</h1>
          {project?.projectSkills.map((skill) => (
            <React.Fragment key={skill}>
              <p>#{skill}</p>
            </React.Fragment>
          ))}
        </TechStack>
        <StartTime>
          <h1>시작일</h1>
          <p>{koDtf.format(createdDate)}</p>
        </StartTime>
        <Content>
          <h1>소개</h1>
          <p>{project.content}</p>
        </Content>
      </Detail>
    </Container>
  );
}

export default ProjectDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1060px;
  gap: 30px;
  margin: auto;
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;
`;

const Title = styled.h1`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: -0.03em;
  color: #000000;
`;

const UserSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const UserIcon = styled.img`
  width: 52px;
  height: 52px;
  background-color: gray;
  border-radius: 50%;
  object-fit: cover;
`;

const User = styled.div`
  p:first-child {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.03em;
    color: #000000;
  }

  p:last-child {
    opacity: 0.5;
  }
`;

const Menu = styled.div`
  position: relative;
  cursor: pointer;
`;

const Hr = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.3);
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;

  h1 {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.03em;
    color: #000000;
  }

  p {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.03em;
    color: #000000;
    opacity: 0.7;
  }
`;

const RecruitMember = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  p {
    color: #000000;
    opacity: 0.8;
  }
`;

const Member = styled.div`
  display: flex;
  gap: 9px;
`;

const CountMember = styled.div`
  display: flex;

  p {
    opacity: 1;
  }

  p:first-child {
    color: #298cff;
  }
`;

const Modal = styled.div`
  position: absolute;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 160px;
  height: 96px;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  gap: 12px;
  bottom: 40px;
  right: 20px;
`;

const TechStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StartTime = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
