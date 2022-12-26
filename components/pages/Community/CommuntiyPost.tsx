import Image from "next/image";
import React from "react";
import styled from "styled-components";
import AuthorOccupationTag from "./AuthorOccupationTag";
import { CommunityPosts } from "./CommunityPosts";
import MessageCircle from "./MessageCircle";
import ThumbsUp from "./ThumbsUp";

interface CommunityPostData {
  nickName: string;
  occupation: string;
  title: string;
  content: string;
  like: number;
  comment: string[];
  createdAt: string;
  id: number;
}

interface CommunityPostProps extends CommunityPosts {
  data: CommunityPostData;
}

const CommuntiyPost = ({ data, setIsModalOpened }: CommunityPostProps) => {
  const handlePostClick = () => {
    setIsModalOpened(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <PostContainer onClick={handlePostClick}>
      <div>
        <CreateInfo>
          <ProfileImg />
          <span className="author">{data.nickName}</span>
          <AuthorOccupationTag occupation={data.occupation} />
          <span className="created-at">{data.createdAt}</span>
        </CreateInfo>
        <Content>
          <h3>{data.title}</h3>
          <div>{data.content}</div>
        </Content>
        <SubInfo>
          <div className="sub-info">
            <ThumbsUp color={"#8F92A3"} />
            {data.like}
          </div>
          <div className="sub-info">
            <MessageCircle color={"#8F92A3"} />
            {data.comment.length}
          </div>
        </SubInfo>
      </div>
    </PostContainer>
  );
};

export default CommuntiyPost;

const PostContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 45px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray300};

  > div {
    cursor: pointer;
  }
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
