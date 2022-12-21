import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import BigCardHover from "./BigCardHover";
import { BigCardProps } from "./BigCards";
import { BigCardsImg, BigCardsImgType } from "../../../public/Cards/BigCards";

const BigCard = (data: BigCardProps) => {
  const [isHover, setIsHover] = useState(false);

  const selectCardImg = (type: string, occupation: string) => {
    return Object.keys(BigCardsImg).filter(
      (cardName) => cardName.includes(type) && cardName.includes(occupation)
    )[0];
  };

  return (
    <CardContainer>
      <Card
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {isHover ? (
          <BigCardHover {...data} />
        ) : (
          <Image
            src={
              BigCardsImg[
                selectCardImg(data.type, data.occupation) as BigCardsImgType
              ]
            }
            alt={`${data.occupation}Card`}
          />
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
  height: 300px;
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
