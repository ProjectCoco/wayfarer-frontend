import Image from "next/image";
import React from "react";
import styled from "styled-components";
import AuthorOccupationTag from "./AuthorOccupationTag";
import ThumbsUp from "../../../public/Community/ThumbsUp.svg";
import MessageCircle from "../../../public/Community/MessageCircle.svg";

interface CommunityPost {
  nickName: string;
  occupation: string;
  title: string;
  content: string;
  like: number;
  comment: string[];
  createdAt: string;
  id: number;
}

const CommuntiyPost = ({ data }: { data: CommunityPost }) => {
  return (
    <PostContainer>
      <CreateInfo>
        <ProfileImg />
        <span className="author">{data.nickName}</span>
        <AuthorOccupationTag occupation={data.occupation} />
        <span className="created-at"></span>
      </CreateInfo>
      <Content>
        <h3>{data.title}</h3>
        <div>{data.content}</div>
      </Content>
      <SubInfo>
        <div className="sub-info">
          <Image src={ThumbsUp} alt="like" />
          {data.like}
        </div>
        <div className="sub-info">
          <Image src={MessageCircle} alt="comment" />
          {data.comment.length}
        </div>
      </SubInfo>
    </PostContainer>
  );
};

export default CommuntiyPost;

const PostContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 45px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray300}; ;
`;

const ProfileImg = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.theme.colors.gray200};
  border-radius: 50%;
`;

const CreateInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: ${(props) => props.theme.fontSize.text_lg};

  .author {
    font-weight: 600;
  }

  .created-at {
    color: ${(props) => props.theme.colors.gray500};
  }
`;

const Content = styled.div`
  padding-right: 60px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
  margin-bottom: 30px;

  h3 {
    font-size: 25px;
    color: ${(props) => props.theme.colors.Cosmic_black};
  }

  div {
    color: ${(props) => props.theme.colors.gray800};
    font-size: ${(props) => props.theme.fontSize.text_lg};
  }
`;

const SubInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${(props) => props.theme.colors.gray500};
  font-size: ${(props) => props.theme.fontSize.text_xl};

  .sub-info {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
