import React, { useEffect, useState } from "react";
import styled from "styled-components";

const items = ["프론트엔드", "백엔드", "디자인", "기획자", "기타"];

interface Props {
  icon: React.ReactNode;
  width: string;
}

function DropDown({ icon, ...props }: Props) {
  const [isDrop, setIsDrop] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsDrop(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <DropDownBlock ref={ref}>
      <Block onClick={() => setIsDrop((pre) => !pre)} {...props}>
        <span>디자이너</span>
        {icon}
      </Block>
      {isDrop && (
        <DropDownBox>
          {items.map((item) => (
            <DropDownItem key={item}>{item}</DropDownItem>
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
  left: 0;
  width: 120px;
  padding: 20px;
  z-index: 2;
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
