import React from "react";
import styled from "styled-components";

export interface AtomDropDownItemProps {
  text: string;
}

const AtomDropDownItem = ({ text }: AtomDropDownItemProps) => {
  return <DropDownItem>{text}</DropDownItem>;
};

export default AtomDropDownItem;

const DropDownItem = styled.div`
  padding: 16px 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.03em;
  color: #000000;
  cursor: pointer;

  &:hover {
    background-color: #ebebeb;
  }
`;
