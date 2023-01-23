import React, { KeyboardEvent, useState } from "react";
import styled from "styled-components";
import WriteInput from "./WriteInput";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  tags: string[];
  type: "projectTags" | "projectSkills";
  handleAddTag: (
    e: KeyboardEvent<HTMLInputElement>,
    type: "projectTags" | "projectSkills"
  ) => void;
  handleRemoveTag: (tag: string, type: "projectTags" | "projectSkills") => void;
}

function TagInput({
  tags,
  type,
  handleRemoveTag,
  handleAddTag,
  ...props
}: Props) {
  return (
    <Block>
      <TagBox>
        {tags.map((tag) => (
          <Tag key={tag} onClick={() => handleRemoveTag(tag, type)}>
            #{tag}
          </Tag>
        ))}
      </TagBox>
      {tags.length < 5 && (
        <WriteInput {...props} onKeyUp={(e) => handleAddTag(e, type)} />
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
