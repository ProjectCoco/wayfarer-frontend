import React from "react";
import styled from "styled-components";
import Image from "next/image";
import CloseIcon from "../../../public/common/ico_close.svg";
import { useDialog } from "../../../context/DialogContext";

interface Props {
  title: string;
  subTitle: string;
}

function DialogHeader({ title, subTitle }: Props) {
  const { close } = useDialog();
  return (
    <Block>
      <TopTitle>
        <Title>{title}</Title>
        <CloseButton onClick={() => close()}>
          <Image src={CloseIcon} alt="closeIcon" />
        </CloseButton>
      </TopTitle>
      <SubTitle>{subTitle}</SubTitle>
    </Block>
  );
}

export default DialogHeader;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TopTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  color: #2d2d2f;
`;

const CloseButton = styled.div`
  cursor: pointer;
`;

const SubTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #222222;
  opacity: 0.7;
`;
