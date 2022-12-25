import React from "react";
import styled from "styled-components";
import ThumbsUp from "../ThumbsUp";

const PostLikeButton = ({ like }: { like: number }) => {
  return (
    <LikeButtonContainer>
      <ThumbsUp color={"#17181C"} />
      <span>좋아요</span>
      <span>{like}</span>
    </LikeButtonContainer>
  );
};

export default PostLikeButton;

const LikeButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 173.57px;
  gap: 5px;
  padding: 13px 25.31px;
  background-color: ${(props) => props.theme.colors.gray100};
  color: ${(props) => props.theme.colors.Cosmic_black};
  font-size: ${(props) => props.theme.fontSize.text_xl};
  border-radius: 50px;
`;
