import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import useDropDown from "../../../hooks/Write/useDropDown";
import DropDownIcon from "./DropDownIcon";

interface Props extends InputHTMLAttributes<HTMLDivElement> {
  width: string;
  menuItems: string[];
  defaultValue?: string;
  value?: string;
  handleClick: (date: string) => void;
}

function DropDown({
  menuItems,
  defaultValue,
  value,
  onClick,
  handleClick,
  ...props
}: Props) {
  const { isDrop, ref, handleChangeDrop } = useDropDown();

  return (
    <DropDownBlock ref={ref}>
      <Block onClick={() => handleChangeDrop()} {...props}>
        <DefaultValue>{value ? value : defaultValue}</DefaultValue>
        <DropDownIcon />
      </Block>
      {isDrop && (
        <DropDownBox>
          {menuItems.map((item) => (
            <DropDownItem
              key={item}
              onClick={() => {
                handleClick(item);
                handleChangeDrop(false);
              }}
            >
              {item}
            </DropDownItem>
          ))}
        </DropDownBox>
      )}
    </DropDownBlock>
  );
}

export default DropDown;

const DropDownBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Block = styled.div<{
  width: string;
}>`
  width: ${({ width }) => width};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  span {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.03em;
    color: #222222;
    white-space: nowrap;
  }
`;

const DropDownBox = styled.div`
  position: absolute;
  display: flex;
  gap: 12px;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  top: 39px;
  left: -20px;
  width: 120px;
  height: 200px;
  padding: 20px;
  z-index: 2;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const DropDownItem = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 22px;
  letter-spacing: -0.03em;
  color: #000000;
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const Value = styled.span`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.03em;
  color: #222222;
`;

const DefaultValue = styled(Value)`
  opacity: 0.3;
`;
