import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
}

const BannerButton = ({ text }: Props) => {
  return <Button>{text}</Button>;
};

export default BannerButton;

const Button = styled.button`
  position: absolute;
  bottom: 102.99px;
  height: 50px;
  padding: 13px 24px;
  font-size: ${(props) => props.theme.fontSize.text_xl};
  font-weight: 600;
  color: #ffffff;
  background-color: ${(props) => props.theme.colors.Main_blue};
  border: none;
  border-radius: 30px;
  cursor: pointer;
`;
