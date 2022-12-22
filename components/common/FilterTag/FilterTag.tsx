import React from "react";
import styled from "styled-components";

interface FilterProps {
  text: string;
  className: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const FilterTag = ({ text, className, onClick }: FilterProps) => {
  return (
    <Tag className={className} onClick={onClick}>
      {text}
    </Tag>
  );
};

export default FilterTag;

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 28px;
  background-color: ${(props) => props.theme.colors.gray100};
  color: ${(props) => props.theme.colors.Cosmic_black};
  font-size: 20px;
  border-radius: 100px;
  cursor: pointer;
`;
