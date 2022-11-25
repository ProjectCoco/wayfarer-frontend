import React from "react";
import styled from "styled-components";
import OverLay from "./OverLay";

interface Props {
  children: React.ReactNode;
  visible: boolean;
}

function Modal({ children, visible }: Props) {
  return (
    <>
      <OverLay visible={visible}></OverLay>
      {visible && <ModalBox>{children}</ModalBox>}
    </>
  );
}

export default Modal;

const ModalBox = styled.div`
  position: fixed;
  padding: 40px;
  background-color: white;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 480px;
  border-radius: 15px;
`;
