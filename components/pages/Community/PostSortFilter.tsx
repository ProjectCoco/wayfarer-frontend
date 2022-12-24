import Image from "next/image";
import React from "react";
import styled from "styled-components";
import sortArrow from "../../../public/Community/UpDownArrow.svg";

const PostSortFilter = () => {
  return (
    <PostSortFilterContainer>
      <Image src={sortArrow} alt="sort" />
      <span>최신순</span>
    </PostSortFilterContainer>
  );
};

export default PostSortFilter;

const PostSortFilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24.89px;
  color: ${(props) => props.theme.colors.gray600};
  font-size: 25px;
  cursor: pointer;
`;
