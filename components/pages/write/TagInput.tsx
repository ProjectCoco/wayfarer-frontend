import React, { KeyboardEvent, useState } from "react";
import styled from "styled-components";
import useHandleTag from "../../../hooks/Write/useHandleTag";
import WriteInput from "./WriteInput";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

function TagInput({
  name,
  type,
  placeholder,
  value,
  onChange,
  onClick,
}: Props) {
  const { tags, handleAddTag, handleRemoveTag } = useHandleTag();
  return (
    <Block>
      <TagBox>
        {tags.map((tag) => (
          <Tag key={tag} onClick={() => handleRemoveTag(tag)}>
            #{tag}
          </Tag>
        ))}
      </TagBox>
      {tags.length < 5 && (
        <WriteInput placeholder={placeholder} onKeyUp={handleAddTag} />
      )}
    </Block>
  );
}

export default TagInput;

const Block = styled.div`
  display: flex;
`;

const TagBox = styled.div`
  display: flex;
  gap: 5px;
`;

const Tag = styled.span`
  white-space: nowrap;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.03em;
  text-decoration-line: underline;
  color: #222222;
  cursor: pointer;
`;
