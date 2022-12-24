import Image from "next/image";
import React from "react";
import styled from "styled-components";
import PencilImg from "../../../public/Community/Pencil.svg";

const CommunityInput = () => {
  return (
    <CommunityInputContainer>
      <InputContainer>
        <ProfileImg />
        <CommunityInputForm>
          <input placeholder={"혜민님, 어떤 이야기를 나누고 싶으세요?"} />
          <button>
            <Image src={PencilImg} alt="입력" />
          </button>
        </CommunityInputForm>
      </InputContainer>
    </CommunityInputContainer>
  );
};

export default CommunityInput;

const CommunityInputContainer = styled.div`
  width: 100%;
  padding: 50px 0;
  border-top: 1px solid ${(props) => props.theme.colors.gray300};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray300};
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
