import Image from "next/image";
import React from "react";
import styled from "styled-components";
import PencilImg from "../../../public/Community/Pencil.svg";

import Enter from "./Enter";

interface CommentInputProps {
  mode: "post" | "comment" | "nestedComment";
  placeholder: string;
  setIsWriteModalOpened?: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommunityInput = ({
  mode,
  placeholder,
  setIsWriteModalOpened,
}: CommentInputProps) => {
  const handleFormClick = () => {
    if (setIsWriteModalOpened) {
      setIsWriteModalOpened(true);
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <CommunityInputContainer className="input-container">
      <InputContainer>
        <ProfileImg mode={mode} />
        <CommunityInputForm onClick={handleFormClick} mode={mode}>
          <input
            placeholder={placeholder}
            disabled={mode === "post" ? true : false}
          />
          <button>
            {mode === "post" ? (
              <Image src={PencilImg} alt="입력" />
            ) : (
              <Enter mode={mode} />
            )}
          </button>
        </CommunityInputForm>
      </InputContainer>
    </CommunityInputContainer>
  );
};

export default CommunityInput;

const CommunityInputContainer = styled.div`
  width: 100%;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 30px;
`;

const ProfileImg = styled.div<{ mode: string }>`
  display: flex;
  flex-shrink: 0;
  width: ${(props) => (props.mode === "nestedComment" ? "50px" : "70px")};
  height: ${(props) => (props.mode === "nestedComment" ? "50px" : "70px")};
  background-color: ${(props) => props.theme.colors.Cosmic_black};
  border-radius: 100%;
`;

const CommunityInputForm = styled.form<{ mode?: string }>`
  display: flex;
  width: 100%;
  position: relative;

  input {
    display: flex;
    align-items: center;
    height: ${(props) => (props.mode === "nestedComment" ? "50px" : "70px")};
    flex-grow: 1;
    background-color: #f1f1f4;
    border: none;
    border-radius: 80px;
    padding-left: 41.27px;
  }

  input::placeholder {
    color: ${(props) => props.theme.colors.gray600};
    font-size: 18px;
  }

  button {
    height: ${(props) => (props.mode === "nestedComment" ? "35px" : "50px")};
    width: ${(props) => (props.mode === "nestedComment" ? "35px" : "50px")};
    background-color: ${(props) => props.theme.colors.Cosmic_black};
    border-radius: 100%;
    border: none;
    position: absolute;
    top: ${(props) => (props.mode === "nestedComment" ? "7.5px" : "10px")};
    right: ${(props) => (props.mode === "nestedComment" ? "8px" : "10px")};
  }
`;
