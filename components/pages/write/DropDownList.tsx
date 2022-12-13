import React from "react";
import styled from "styled-components";

interface Props {
  icons: React.ReactNode[];
}

function DropDownList({ icons }: Props) {
  return (
    <Block>
      {icons.map((icon, index) => (
        <React.Fragment key={index}>
          {icon}
          {index !== icons.length - 1 && <Line />}
        </React.Fragment>
      ))}
    </Block>
  );
}

export default DropDownList;

const Block = styled.div`
  display: flex;
  gap: 20px;
`;

const Line = styled.div`
  width: 1px;
  height: 20px;
  background-color: #e5e5e5;
`;
