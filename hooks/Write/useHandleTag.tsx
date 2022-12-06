import React, { useState } from "react";

function useHandleTag() {
  const [tags, setTags] = useState<string[]>([]);

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (tags.length > 5) return;

    if (tags.includes(e.currentTarget.value))
      return alert("중복된 태그입니다.");

    if (e.key === " " && e.currentTarget.value !== "") {
      setTags([...tags, e.currentTarget.value]);
      e.currentTarget.value = "";
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return {
    tags,
    handleAddTag,
    handleRemoveTag,
  };
}

export default useHandleTag;
