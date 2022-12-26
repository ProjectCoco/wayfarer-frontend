import React from "react";
import styled from "styled-components";

interface occupationColor {
  [key: string]: { bg: string; profile: string };
}

export const occupationColor: occupationColor = {
  개발: { bg: "#DCE6F9", profile: "#044ADC" },
  디자인: { bg: "#F9DCED", profile: "#FF0099" },
  기획: { bg: "#F1F9DC", profile: "#C0FF0D" },
};

interface CommunityCardData {
  occupation: string;
  tag: string[];
  title: string;
  nickName: string;
  id: number;
}

const CommunityCard = (data: CommunityCardData) => {
  return (
    <CommunityCardContainer occupation={data.occupation}>
      <TagContainer>
        {[data.occupation, ...data.tag].map((text) => (
          <div key={text}>{text}</div>
        ))}
      </TagContainer>
      <h3>{data.title}</h3>
      <Profile>
        <ProfileImg occupation={data.occupation} />
        {data.nickName}
      </Profile>
    </CommunityCardContainer>
  );
};

export default CommunityCard;

const CommunityCardContainer = styled.div<{ occupation: string }>`
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 375px;
  height: 250px;
  background-color: ${(props) => occupationColor[props.occupation].bg};
  border-radius: 10px;
  padding: 30px 30px 40px 30px;

  h3 {
    height: 60px;
    font-size: 25px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.Cosmic_black};
  }
`;

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  color: ${(props) => props.theme.colors.gray600};
  font-size: 15px;
  line-height: 18px;
`;

const Profile = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  color: ${(props) => props.theme.colors.Cosmic_black};
  font-size: ${(props) => props.theme.fontSize.text_xl};
  font-weight: 500;
  line-height: 24px;
`;

const ProfileImg = styled.div<{ occupation: string }>`
  width: 30px;
  height: 30px;
  background-color: ${(props) => occupationColor[props.occupation].profile};
  border-radius: 100%;
`;
