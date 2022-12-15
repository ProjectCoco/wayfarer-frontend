import React from "react";
import Image from "next/image";
import styled from "styled-components";
import SmallProjCardDev from "../../../public/Cards/SmallCards/SmProjCardDev.svg";
import { BigCardProps } from "../../pages/Home/BigCards";

const SmallCard = (data: BigCardProps) => {
  return (
    <CardContainer>
      <Card>
        <Image src={SmallProjCardDev} alt="SmallProjCardDev" />
      </Card>
      <Text>
        <ProjectTitle>{data.title}</ProjectTitle>
        <Tags>
          <Tag>
            {data.tag.map((el, idx) => (
              <div key={idx}>#{el}</div>
            ))}
          </Tag>
          <div>{data.period}</div>
        </Tags>
      </Text>
    </CardContainer>
  );
};

export default SmallCard;

const CardContainer = styled.div`
  width: 417px;
  height: 366px;
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  margin-bottom: 25px;
  display: block;
  width: 100%;
  line-height: 0;
  height: 200px;

  img {
    height: 200px;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const ProjectTitle = styled.div`
  font-size: 25px;
  line-height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
