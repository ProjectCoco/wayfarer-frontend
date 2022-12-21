import React from "react";
import styled from "styled-components";
import { FilterMenus, FilterMenuType } from "../../../utils/Filter";

interface OccupationFilterProps {
  selected: FilterMenuType;
  setSelectedFilter: React.Dispatch<React.SetStateAction<FilterMenuType>>;
}

const OccupationFilter = ({
  selected,
  setSelectedFilter,
}: OccupationFilterProps) => {
  const handleOccupationTabClick = (value: FilterMenuType) => {
    setSelectedFilter(value);
  };

  return (
    <FilterContainer>
      {FilterMenus.map((value) => (
        <Tab
          key={value}
          className={`${selected === value ? "selected" : ""}`}
          onClick={() => handleOccupationTabClick(value)}
        >
          {value}
        </Tab>
      ))}
    </FilterContainer>
  );
};

export default OccupationFilter;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  font-size: ${(props) => props.theme.fontSize.text_5xl};
  color: #9da1ae;

  .selected {
    color: ${(props) => props.theme.colors.Cosmic_black};
  }
`;

const Tab = styled.div`
  cursor: pointer;
`;
