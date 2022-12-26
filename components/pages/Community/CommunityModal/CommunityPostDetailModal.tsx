import React, { useRef } from "react";
import styled from "styled-components";
import ThumbsUp from "../ThumbsUp";
import MessageCircle from "../MessageCircle";
import PostLikeButton from "./PostLikeButton";
import CommunityInput from "../CommunityInput";
import CommunityPostComment from "./CommunityPostComment";
import Image from "next/image";
import CloseImg from "../../../../public/Community/Close.svg";

const postDetailData = {
  title: "Q. 프론트엔드 포트폴리오와 취업준비",
  nickName: "닉네임",
  createdAt: "2022.10.06 화요일 오후 5:00",
  like: 38,
  content: `저는 현재 부트캠프나 국비학원을 다니지않고 독학하고있는 학생입니다. 독학을 하고있다보니 포폴작업을 하려하는데에 좀 막힘이있더라고요 이 막힘은 코드를 작성해나가는 과정에서 막히는게 아니고 어떤걸 만들어내야 잘만들었다 라고 좋게봐줄수있을지 주제나 만들어야할 서비스의 내용을 정하질못하겠습니다.. 톡방에서는 잘만든 프로젝트를 물어봤을때 협업을 중요시하고 백엔드가 참여된 프로젝트라고 하더라구요.. 현재 저는 독학중이지만 프로젝트에 백엔드 서버가 필요하다면 Nodejs와 MongoDB를 배워볼 의향은 있습니다. 하지만 제가 배운것들을 활용해 뭘만들어야할지는 아직까진 .. 다른분들은 취업할때 프로젝트를 어떤 주제를 어디서 아이디어를 얻어오셨나요? 어떠한 서비스를 만들어야 잘 만든 프로젝트라 인정을받을 수 있을까요?`,
  tags: ["Q&A", "커리어고민"],
  comments: [
    {
      nickName: "닉네임",
      occupation: "디자인",
      createdAt: "5분 전",
      content:
        "음.. 일단은 독학 하는 입장이고 주제를 모르겠다는건데 독학 하면서 문제 해결 능력만 키워주면 될 것 같고~ 이건 구글링이나 구글링해서도 안나오면 스택오버플로우 라는 해외사이트에서 자료를 찾으시면되구요. 거기다가 안 나오면 직접 영어로 써서 (번역기로해서도 되구요) 질문 남기고 해서 응용하면 될것 같아요.",
    },
    {
      nickName: "개발자",
      occupation: "개발",
      createdAt: "2시간 전",
      content:
        "음.. 일단은 독학 하는 입장이고 주제를 모르겠다는건데 독학 하면서 문제 해결 능력만 키워주면 될 것 같고~ 이건 구글링이나 구글링해서도 안나오면 스택오버플로우 라는 해외사이트에서 자료를 찾으시면되구요. 거기다가 안 나오면 직접 영어로 써서 (번역기로해서도 되구요) 질문 남기고 해서 응용하면 될것 같아요.",
    },
    {
      nickName: "기획자",
      occupation: "기획",
      createdAt: "2시간 전",
      content:
        "음.. 일단은 독학 하는 입장이고 주제를 모르겠다는건데 독학 하면서 문제 해결 능력만 키워주면 될 것 같고~ 이건 구글링이나 구글링해서도 안나오면 스택오버플로우 라는 해외사이트에서 자료를 찾으시면되구요. 거기다가 안 나오면 직접 영어로 써서 (번역기로해서도 되구요) 질문 남기고 해서 응용하면 될것 같아요.",
    },
  ],
};

interface CommunityPostDetailModalProps {
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommunityPostDetailModal = ({
  setIsModalOpened,
}: CommunityPostDetailModalProps) => {
  const wrapperRef = useRef(null);

  const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (wrapperRef.current === e.target) {
      setIsModalOpened(false);
      document.body.style.overflow = "unset";
    }
  };

  return (
    <PostDetailModalWrapper ref={wrapperRef} onClick={handleWrapperClick}>
      <PostDetailModalContainer>
        <h3>{postDetailData.title}</h3>
        <button
          onClick={() => {
            setIsModalOpened(false);
            document.body.style.overflow = "unset";
          }}
        >
          <Image src={CloseImg} alt="close" />
        </button>
        <CreateInfo>
          <div className="profile">
            <ProfileImg />
            <div>{postDetailData.nickName}</div>
          </div>
          <div>{postDetailData.createdAt}</div>
          <div className="sub-info">
            <div className="like">
              <ThumbsUp color={"#73778C"} />
              {postDetailData.like}
            </div>
            <div className="comment">
              <MessageCircle color={"#73778C"} />
              {postDetailData.comments.length}
            </div>
          </div>
        </CreateInfo>
        <Content>
          <p>{postDetailData.content}</p>
          <div className="tags">
            {postDetailData.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        </Content>
        <PostLikeButton like={postDetailData.like} />
        <CommunityInput mode="comment" placeholder="댓글을 남겨주세요." />
        <CommunityPostComments>
          {postDetailData.comments.map((comment, idx) => (
            <CommunityPostComment key={idx} data={comment} />
          ))}
        </CommunityPostComments>
      </PostDetailModalContainer>
    </PostDetailModalWrapper>
  );
};

export default CommunityPostDetailModal;

const PostDetailModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
  padding: 100px 0;
  overflow-y: auto;
`;

const PostDetailModalContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 1280px;
  background-color: white;
  border-radius: 20px;
  padding: 50px;

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
