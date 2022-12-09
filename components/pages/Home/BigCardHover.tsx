import Image from "next/image";
import React from "react";
import styled from "styled-components";
import LikeImg from "../../../public/Cards/BigCards/Like.svg";
import { BigCardProps } from "./BigCards";

const BigCardHover = (data: BigCardProps) => {
  return (
    <CardContainer>
      <CardImg>
        <ProjectHeader like={data.like}>
          <span>{data.name}</span>
          <Image src={LikeImg} alt="Like" />
        </ProjectHeader>
        <ProjectMemeber>{data.memeber}</ProjectMemeber>
        <Stacks>
          {data.stack.slice(0, 4).map((el, idx) => (
            <div key={idx}>{el}</div>
          ))}
          + {data.stack.length - 4}
        </Stacks>
      </CardImg>
    </CardContainer>
  );
};

export default BigCardHover;

const CardContainer = styled.div``;

const CardImg = styled.div`
  width: 633px;
  height: 300px;
  color: #ffffff;
  background-color: ${(props) => props.theme.colors.Cosmic_black};
  border-radius: 10px;
  padding: 35.37px 32px;
`;

const ProjectHeader = styled.div<{ like: boolean }>`
  font-size: ${(props) => props.theme.fontSize.text_5xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
`;

const ProjectMemeber = styled.div`
  color: ${(props) => props.theme.colors.gray300};
  font-size: 25px;
  margin-bottom: 90px;
`;

const Stacks = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  color: ${(props) => props.theme.colors.gray300};

  div {
    background-color: ${(props) => props.theme.colors.Main_blue};
    color: #ffffff;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
  }
`;

const Stack = styled.div``;
