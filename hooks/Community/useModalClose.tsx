import React, { useRef } from "react";

const useModalClose = (
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const ref = useRef(null);

  const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current === e.target) {
      setIsModalOpened(false);
      document.body.style.overflow = "unset";
    }
  };

  const handleCloseButtonClick = () => {
    setIsModalOpened(false);
    document.body.style.overflow = "unset";
  };
  return { ref, handleWrapperClick, handleCloseButtonClick };
};

export default useModalClose;
