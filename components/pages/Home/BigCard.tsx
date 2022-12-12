import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import BigStudyCardDevImg from "../../../public/Cards/BigCards/BigStudyCardDev.svg";
import BigCardHover from "./BigCardHover";
import { BigCardProps } from "./BigCards";

const BigCard = (data: BigCardProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <CardContainer>
      <Card
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {isHover ? (
          <BigCardHover {...data} />
        ) : (
          <Image src={BigStudyCardDevImg} alt="BigStudyCardDevImg" />
        )}
      </Card>
      <ProjectTitle>{data.title}</ProjectTitle>
      <Tags>
        <Tag>
          {data.tag.map((el, idx) => (
            <div key={idx}>#{el}</div>
          ))}
        </Tag>
        <div>{data.period}</div>
      </Tags>
    </CardContainer>
  );
};

export default BigCard;

const CardContainer = styled.div`
  width: 633px;
`;

const Card = styled.div`
  margin-bottom: 35px;
  display: block;
  width: 100%;
  line-height: 0;
  height: 299.52px;

  img {
    height: 300px;
  }
`;

const ProjectTitle = styled.div`
  font-size: 25px;
  margin-bottom: 20px;
`;

const Tags = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: #999999;
  display: flex;
  gap: 8px;
`;

const Tag = styled.div`
  display: flex;
  gap: 8px;
`;
