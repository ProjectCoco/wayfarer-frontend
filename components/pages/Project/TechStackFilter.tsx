import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FilterMenuType, TabTechStacks } from "../../../utils/Filter";

const TechStackFilter = ({ occupation }: { occupation: FilterMenuType }) => {
  const [techStackList, setTechStackList] = useState<any>(
    TabTechStacks[occupation]
  );

  const handleTechStackClick = (stackName: string) => {
    setTechStackList((prev: any) => {
      return {
        ...prev,
        [stackName]: !prev[stackName],
      };
    });
  };

  useEffect(() => {
    setTechStackList(TabTechStacks[occupation]);
  }, [occupation]);

  return (
    <TechStackFilterContainer>
      {Object.keys(techStackList).map((stack) => (
        <Tag
          key={stack}
          className={techStackList[stack] ? "selected" : ""}
          onClick={() => handleTechStackClick(stack)}
        >
          {stack}
        </Tag>
      ))}
    </TechStackFilterContainer>
  );
};

export default TechStackFilter;

const TechStackFilterContainer = styled.div`
  width: 1280px;
  display: flex;
  gap: 15px;
  margin-top: 45px;
  margin-bottom: 68px;

  .selected {
    background-color: ${(props) => props.theme.colors.Cosmic_black};
    color: ${(props) => props.theme.colors.gray200};
  }
`;

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 28px;
  height: 42px;
  background-color: ${(props) => props.theme.colors.gray100};
  color: ${(props) => props.theme.colors.Cosmic_black};
  font-size: 20px;
  border-radius: 100px;
  cursor: pointer;
`;
