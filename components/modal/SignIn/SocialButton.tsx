import React from "react";
import styled from "styled-components";
import Image from "next/image";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  bgColor: string;
  color: string;
  icon: string;
  border?: string;
}

function SocialButton({ onClick, text, icon, ...rest }: Props) {
  return (
    <Button onClick={onClick} {...rest}>
      <ImageBox>
        <Image src={icon} alt="SocialIconImage" />
      </ImageBox>
      <span>{text}</span>
    </Button>
  );
}

export default SocialButton;

const Button = styled.button<{
  bgColor: string;
  color: string;
  border?: string;
}>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: ${({ border }) => (border ? border : "none")};
  padding: 14px 23px;
  height: 46px;
  width: 100%;
  background-color: ${({ bgColor }) => bgColor};
  cursor: pointer;

  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: ${({ color }) => color};
  }
`;

const ImageBox = styled.div`
  position: absolute;
  left: 23px;
`;
