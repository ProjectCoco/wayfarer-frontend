import React from "react";
import styled from "styled-components";
import { BigCardProps } from "../../pages/Home/BigCards";
import SmallLikeButton from "./SmallLikeButton";

const SmallCardHover = (data: BigCardProps) => {
  return (
    <CardContainer>
      <CardImg>
        <ProjectHeader>
          <span>{data.name}</span>
          <SmallLikeButton like={data.like} />
        </ProjectHeader>
        <ProjectMemeber>{data.memeber.join(" / ")}</ProjectMemeber>
        <Stacks>
          {data.stack.slice(0, 4).map((el, idx) => (
            <div key={idx}>{el}</div>
          ))}
          <span>
            {data.stack.length > 4 ? ` + ${data.stack.length - 4}` : ""}
          </span>
        </Stacks>
      </CardImg>
    </CardContainer>
  );
};

export default SmallCardHover;

const CardContainer = styled.div``;

const CardImg = styled.div`
  width: 416.99px;
  height: 199.5px;
  color: #ffffff;
  background-color: ${(props) => props.theme.colors.Cosmic_black};
  border-radius: 10px;
  padding: 30px 33px;
  font-size: 25px;

  img {
    object-fit: cover;
  }
`;

const ProjectHeader = styled.div`
  color: ${(props) => props.theme.colors.gray100};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ProjectMemeber = styled.div`
  color: ${(props) => props.theme.colors.gray300};
  font-size: 17px;
  margin-bottom: 50px;
`;

const Stacks = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  color: ${(props) => props.theme.colors.gray300};

  div {
    background-color: ${(props) => props.theme.colors.Main_blue};
    color: #ffffff;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    font-size: 17px;
  }
`;
