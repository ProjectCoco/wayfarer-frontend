import React, { useState } from "react";

const useToggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleButtonClick = () => {
    setIsToggled(!isToggled);
  };

  return { isToggled, handleToggleButtonClick };
};

export default useToggle;
