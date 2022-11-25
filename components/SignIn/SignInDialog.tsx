import React from "react";
import styled from "styled-components";
import { useDialog } from "../../context/DialogContext";
import Modal from "../modal/Modal";
import ButtonBox from "./ButtonBox";
import DialogHeader from "./DialogHeader";
import SocialButton from "./SocialButton";

interface Props {
  // visible: boolean;
  // onClose(): void;
  // onConfirm(): void;
}

function SignInDialog() {
  const { close } = useDialog();
  return (
    <>
      <DialogHeader title={"회원가입"} onClose={close} />
      <Main></Main>
      <ButtonBox />
    </>
  );
}

export default SignInDialog;

const Main = styled.div`
  width: 100%;
  height: 300px;
`;
