import React from "react";
import CommunityModalFrame from "./CommunityModalFrame";
import CommunityWrite from "./CommunityPostWrite";

const CommunityWriteModal = ({
  setIsModalOpened,
}: {
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <CommunityModalFrame setIsModalOpened={setIsModalOpened}>
      <CommunityWrite />
    </CommunityModalFrame>
  );
};

export default CommunityWriteModal;
