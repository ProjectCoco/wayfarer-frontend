import React from "react";
import styled from "styled-components";
import SmallPencil from "../../../../public/Community/SmallPencil.svg";
import SmallMessageCircle from "../../../../public/Community/SmallMessageCircle.svg";
import Alert from "../../../../public/Community/Alert.svg";
import Image from "next/image";

const CommunityCommentDropDown = () => {
  return (
    <ModalContainer
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="triangle" />
      <div className="triangle-white" />
      <ModalContentContainer>
        <ModalContent>
          <Image src={SmallMessageCircle} alt="comment" />
          <span>답댓글 달기</span>
        </ModalContent>
        <ModalContent>
          <Image src={SmallPencil} alt="edit" />
          <span>수정하기</span>
        </ModalContent>
        <ModalContent className="alert">
          <Image src={Alert} alt="delete" />
          <span>삭제하기</span>
        </ModalContent>
      </ModalContentContainer>
    </ModalContainer>
  );
};

export default CommunityCommentDropDown;

const ModalContainer = styled.div`
  position: absolute;
  width: 170px;
  border: none;
  z-index: 30;
  right: -25px;
  top: 53px;

  .triangle {
    position: absolute;
    top: -26px;
    right: 13px;
    width: 0px;
    height: 0px;
    border-bottom: 26px solid ${(props) => props.theme.colors.gray300};
    border-left: 14.5px solid transparent;
    border-right: 14.5px solid transparent;
    filter: drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.15));
  }

  .triangle-white {
    position: absolute;
    top: -24px;
    right: 13px;
    width: 0px;
    height: 0px;
    border-bottom: 26px solid white;
    border-left: 14.5px solid transparent;
    border-right: 14.5px solid transparent;
    z-index: 31;
  }
`;

const ModalContentContainer = styled.div`
  position: absolute;
  width: 170px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.gray300};
  padding: 0;
  overflow: hidden;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);

  .alert {
    color: ${(props) => props.theme.colors.Creative_pink};
    border-bottom: none;
  }
`;

const ModalContent = styled.div`
  padding: 15px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => props.theme.colors.Cosmic_black};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray300};
  background-color: white;

  span {
    margin-left: 10px;
  }
`;
