import React from "react";
import styled from "styled-components";
import GlossyIcon from "../../../public/common/Glossy.png";
import Image from "next/image";
import ModalButton from "../ModalButton";
import { useDialog } from "../../../context/DialogContext";

interface Props {
  nickname: string;
}

function CompleteDialog({ nickname }: Props) {
  const { close } = useDialog();
  return (
    <Block>
      <Title>
        {nickname}님, <br />
        환영합니다!
      </Title>
      <SubTitle>
        이제 웨이페어의 다양한 서비스를 바로 이용할 수 있어요!
      </SubTitle>
      <ImageBlock>
        <Image src={GlossyIcon} alt="GlossyIcon" />
      </ImageBlock>
      <ModalButton title="시작하기" disabled={true} onClick={close} />
    </Block>
  );
}

export default CompleteDialog;

const Block = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: -0.03em;
  color: #2d2d2f;
`;
const SubTitle = styled.h2`
  margin-top: 12px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.03em;
  color: #222222;
  opacity: 0.7;
`;

const ImageBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 76px;
  margin-bottom: 82px;
`;
