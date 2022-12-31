import Image from "next/image";
import React from "react";
import styled from "styled-components";
import useModalClose from "../../../../hooks/Community/useModalClose";
import CloseImg from "../../../../public/Community/Close.svg";

export interface CommunityModalFrameProps {
  children: React.ReactNode;
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommunityModalFrame = ({
  children,
  setIsModalOpened,
}: CommunityModalFrameProps) => {
  const { ref, handleWrapperClick, handleCloseButtonClick } =
    useModalClose(setIsModalOpened);

  return (
    <ModalFrameWrapper ref={ref} onClick={handleWrapperClick}>
      <ModalFrameContainer>
        <button onClick={handleCloseButtonClick}>
          <Image src={CloseImg} alt="close" />
        </button>
        {children}
      </ModalFrameContainer>
    </ModalFrameWrapper>
  );
};

export default CommunityModalFrame;

const ModalFrameWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
  padding: 150px 0;
  overflow-y: auto;
`;

const ModalFrameContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 1280px;
  background-color: white;
  border-radius: 20px;

  > button {
    position: absolute;
    top: 44.5px;
    right: 60.5px;
    margin: 0;
    padding: 0;
    line-height: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
