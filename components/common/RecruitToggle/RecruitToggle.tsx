import React from "react";
import styled from "styled-components";

interface ToggleProps {
  isToggled: boolean;
  handleToggleButtonClick: () => void;
}

const RecruitToggle = ({ isToggled, handleToggleButtonClick }: ToggleProps) => {
  return (
    <RecruitToggleContainer>
      <div>모집중</div>
      <ToggleButton onClick={handleToggleButtonClick} isActive={isToggled}>
        <Circle isActive={isToggled} />
      </ToggleButton>
    </RecruitToggleContainer>
  );
};

export default RecruitToggle;

const RecruitToggleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 36px 0;
  font-size: 25px;
  color: ${(props) => props.theme.colors.Cosmic_black};
`;

const ToggleButton = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  padding: 2.5px 3px;
  width: 50px;
  height: 25px;
  background-color: ${(props) => props.theme.colors.gray300};
  margin-left: 30px;
  border-radius: 30px;
  cursor: pointer;
  ${(props) =>
    props.isActive &&
    `
    background-color: ${props.theme.colors.Cosmic_black}
    `}
`;

const Circle = styled.div<{ isActive: boolean }>`
  background-color: #ffffff;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.isActive &&
    `
      transform: translateX(25px);
    `}
`;
