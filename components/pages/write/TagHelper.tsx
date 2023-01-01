import React from "react";
import Image from "next/image";
import HelperImg from "../../../public/common/tagHelper.svg";
import styled from "styled-components";

interface Props {
  top: string | number;
  right: string | number;
}

function TagHelper({ ...props }: Props) {
  return (
    <Block {...props}>
      <Image src={HelperImg} alt={"tagHelper Img"} />
    </Block>
  );
}

export default TagHelper;

const Block = styled.div<Props>`
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
`;
