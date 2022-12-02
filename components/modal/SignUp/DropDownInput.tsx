import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import LabelInput from "./LabelInput";
import DownIcon from "../../../public/common/btn_dropdown.svg";

const values = ["프론트엔드", "백엔드", "디자인", "기획", "모바일"];

interface Props {
  handleDropClick: (selected: string) => void;
  value: string;
}

function DropDownInput({ handleDropClick, value }: Props) {
  const [isDrop, setIsDrop] = useState(false);
  return (
    <Block>
      <LabelInput
        label="관심분야"
        value={value}
        placeholder="관심분야를 선택해 주세요."
        onClick={() => setIsDrop((prev) => !prev)}
        RightIcon={<Image src={DownIcon} alt="DropDownIcon" />}
      />
      {isDrop && (
        <DropDown>
          {values.map((value, i) => (
            <DropDownValue
              key={i}
              onClick={() => {
                setIsDrop(false);
                handleDropClick(value);
              }}
            >
              {value}
            </DropDownValue>
          ))}
        </DropDown>
      )}
    </Block>
  );
}

export default DropDownInput;

const Block = styled.div`
  position: relative;
  cursor: pointer;
`;

const DropDown = styled.div`
  position: absolute;
  width: 100%;
  border: solid 1px black;
  background-color: white;
  border-radius: 8px;
  z-index: 2;

  p:first-child {
    border-radius: 8px 8px 0 0;
  }

  p:last-child {
    border-radius: 0 0 8px 8px;
  }
`;

const DropDownValue = styled.p`
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
