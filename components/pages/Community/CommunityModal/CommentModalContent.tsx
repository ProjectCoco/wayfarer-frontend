import Image from "next/image";
import React from "react";
import styled from "styled-components";
import {
  CommentDropDown,
  CommentDropDownType,
} from "../../../../public/Community/CommentDropDown";
import { CommentDropDownMenus } from "./CommunityCommentDropDown";

interface CommentModalContentProps {
  menu: string;
  setIsNestedInput: React.Dispatch<React.SetStateAction<boolean>>;
  type: "author" | "common";
  handleChangeDrop: (value?: boolean | undefined) => void;
  isNestedInput: boolean;
}

const CommentModalContent = ({
  menu,
  setIsNestedInput,
  type,
  handleChangeDrop,
  isNestedInput,
}: CommentModalContentProps) => {
  const handleNestedInput = (menu: string) => {
    if (menu === "comment") setIsNestedInput(!isNestedInput);
  };

  return (
    <ModalContent
      key={menu}
      className={menu === "alert" || menu === "remove" ? "pink" : ""}
      onClick={() => {
        handleNestedInput(menu);
        handleChangeDrop(false);
      }}
    >
      <Image src={CommentDropDown[menu as CommentDropDownType]} alt={menu} />
      <span>{CommentDropDownMenus[type][menu]}</span>
    </ModalContent>
  );
};

export default CommentModalContent;

const ModalContent = styled.div`
  padding: 15px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => props.theme.colors.Cosmic_black};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray300};
  background-color: white;
  cursor: pointer;

  span {
    margin-left: 10px;
  }
`;
