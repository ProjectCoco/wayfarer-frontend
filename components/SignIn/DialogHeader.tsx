import React from "react";
import styled from "styled-components";
import Image from "next/image";
import CloseIcon from "../../public/common/ico_close.svg";

interface Props {
  title: string;
  onClose(): void;
}

function DialogHeader({ title, onClose }: Props) {
  return (
    <Block>
      <TopTitle>
        <Title>{title}</Title>
        <CloseButton onClick={onClose}>
          <Image src={CloseIcon} alt="closeIcon" />
        </CloseButton>
      </TopTitle>
      <SubTitle>웨이페어에 오신것을 환영합니다 :)</SubTitle>
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
  color: ${({ theme }) => theme.colors.gray_800};
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
`;
