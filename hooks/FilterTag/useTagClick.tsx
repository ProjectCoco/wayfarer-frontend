import React, { useState } from "react";

interface Tag {
  [key: string]: boolean;
}

const useTagClick = (tags: Tag) => {
  const [tagList, setTagList] = useState<Tag>(tags);

  const handleTagClick = (tagName: string) => {
    setTagList((prev: any) => {
      return {
        ...prev,
        [tagName]: !prev[tagName],
      };
    });
  };
  return {
    tagList,
    setTagList,
    handleTagClick,
  };
};

export default useTagClick;
