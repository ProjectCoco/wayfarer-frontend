import React from "react";
import styled from "styled-components";
import AuthorOccupationTag from "../AuthorOccupationTag";
import ThreeDots from "../../../../public/Community/ThreeDots.svg";
import Image from "next/image";
import CommunityCommentModal from "./CommunityCommentModal";
import useDropDown from "../../../../hooks/Write/useDropDown";

interface CommunityPostCommentData {
  nickName: string;
  occupation: string;
  createdAt: string;
  content: string;
}

interface CommunityPostCommentProps {
  data: CommunityPostCommentData;
}

const CommunityPostComment = ({ data }: CommunityPostCommentProps) => {
  const { isDrop, ref, handleChangeDrop } = useDropDown();

  return (
    <CommentContainer>
      <CreateInfo>
        {isDrop && <CommunityCommentModal />}
        <div className="info">
          <ProfileImg />
          <div className="author">{data.nickName}</div>
          <AuthorOccupationTag occupation={data.occupation} />
          <div className="created-at">{data.createdAt}</div>
        </div>
        <div ref={ref}>
          <Image
            src={ThreeDots}
            alt="edit"
            onClick={() => {
              handleChangeDrop(!isDrop);
            }}
          />
        </div>
      </CreateInfo>
      <p>{data.content}</p>
    </CommentContainer>
  );
};

export default CommunityPostComment;

const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  border-bottom: ${(props) => `1px solid ${props.theme.colors.gray300}`};
  line-height: 32px;
  font-size: 15px;
  padding: 30px 0;
  gap: 30px;

  p {
    color: ${(props) => props.theme.colors.Cosmic_black};
  }
`;

const ProfileImg = styled.div`
  width: 35px;
  height: 35px;
  background-color: ${(props) => props.theme.colors.gray300};
  border-radius: 50%;
`;

const CreateInfo = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .info {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .author {
    color: ${(props) => props.theme.colors.Cosmic_black};
    font-size: ${(props) => props.theme.fontSize.text_xl};
  }

  .created-at {
    color: ${(props) => props.theme.colors.gray600};
  }

  img {
    cursor: pointer;
  }
`;
