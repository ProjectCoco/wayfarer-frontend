import Image from "next/image";
import React from "react";
import styled from "styled-components";
import PencilImg from "../../../public/Community/Pencil.svg";
import EnterImg from "../../../public/Community/Enter.svg";

interface CommentInputProps {
  mode?: "comment";
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
    <CommunityInputContainer mode={mode}>
      <InputContainer>
        <ProfileImg />
        <CommunityInputForm onClick={handleFormClick}>
          <input placeholder={placeholder} disabled={mode ? false : true} />
          <button>
            {mode ? (
              <Image src={EnterImg} alt="입력" />
            ) : (
              <Image src={PencilImg} alt="입력" />
            )}
          </button>
        </CommunityInputForm>
      </InputContainer>
    </CommunityInputContainer>
  );
};

export default CommunityInput;

const CommunityInputContainer = styled.div<{ mode?: string }>`
  width: 100%;
  padding: ${(props) => (props.mode ? "0" : "50px 0")};
  border-top: ${(props) =>
    props.mode ? "none" : `1px solid ${props.theme.colors.gray300}`};
  border-bottom: ${(props) =>
    props.mode ? "none" : `1px solid ${props.theme.colors.gray300}`};
  margin-top: ${(props) => (props.mode ? "86px" : "0")};
`;

const InputContainer = styled.div`
  display: flex;
  gap: 30px;
`;

const ProfileImg = styled.div`
  width: 70px;
  height: 70px;
  background-color: ${(props) => props.theme.colors.Cosmic_black};
  border-radius: 100%;
`;

const CommunityInputForm = styled.form`
  display: flex;
  width: 100%;
  position: relative;

  input {
    display: flex;
    align-items: center;
    height: 70px;
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
    width: 50px;
    height: 50px;
    background-color: ${(props) => props.theme.colors.Cosmic_black};
    border-radius: 100%;
    border: none;
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;
