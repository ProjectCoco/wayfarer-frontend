import React from "react";
import styled from "styled-components";
import ThumbsUp from "../ThumbsUp";
import MessageCircle from "../MessageCircle";
import PostLikeButton from "./PostLikeButton";
import CommunityInput from "../CommunityInput";
import CommunityPostComment from "./CommunityPostComment";
import { PostDetailData } from "./CommunityPostDetailModal";

const CommunityPostDetail = ({ data }: { data: PostDetailData }) => {
  return (
    <PostDetailModalContainer>
      <h3>{data.title}</h3>

      <CreateInfo>
        <div className="profile">
          <ProfileImg />
          <div>{data.nickName}</div>
        </div>
        <div>{data.createdAt}</div>
        <div className="sub-info">
          <div className="like">
            <ThumbsUp color={"#73778C"} />
            {data.like}
          </div>
          <div className="comment">
            <MessageCircle color={"#73778C"} />
            {data.comments.length}
          </div>
        </div>
      </CreateInfo>
      <Content>
        <p>{data.content}</p>
        <div className="tags">
          {data.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      </Content>
      <PostLikeButton like={data.like} />
      <CommunityInput mode="comment" placeholder="댓글을 남겨주세요." />
      <CommunityPostComments>
        {data.comments.map((comment, idx) => (
          <CommunityPostComment key={idx} data={comment} />
        ))}
      </CommunityPostComments>
    </PostDetailModalContainer>
  );
};

export default CommunityPostDetail;

const PostDetailModalContainer = styled.div`
  width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    width: 100%;
    font-size: 25px;
    font-weight: ${(props) => props.theme.fontWeight.medium};
    color: ${(props) => props.theme.colors.Cosmic_black};
    margin-bottom: 36px;
  }

  > button {
    position: absolute;
    top: 44.5px;
    right: 60.5px;
    margin: 0;
    padding: 0;
    line-height: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

const CreateInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.gray600};
  font-size: ${(props) => props.theme.fontSize.text_xl};
  margin-bottom: 91.68px;

  .profile {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-right: 31.2px;
  }

  .like .comment {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .sub-info {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 27.02px;
  }
`;

const ProfileImg = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.colors.gray300};
  border-radius: 50%;
`;

const Content = styled.div`
  font-size: 15px;
  font-weight: 300;
  line-height: 32px;
  color: ${(props) => props.theme.colors.gray900};
  margin-bottom: 82px;

  .tags {
    margin-top: 45px;
  }
`;

const CommunityPostComments = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 52.32px;
`;
