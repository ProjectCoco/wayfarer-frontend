import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { TechStackImg, TechStackImgType } from "../../public/TechStackImg";

interface Props {
  techStack: TechStackImgType;
}

function TechStackTag({ techStack }: Props) {
  return (
    <TechStackBox>
      <Image src={TechStackImg[techStack]} alt={"TechStackIcon"} />
    </TechStackBox>
  );
}

export default TechStackTag;

const TechStackBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border: solid 2px ${({ theme }) => theme.colors.sub_blue2};
  border-radius: 50%;
  background-color: white;
`;
