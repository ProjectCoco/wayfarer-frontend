import React, { useState } from "react";

const useMenuSelect = () => {
  const [selected, setSelected] = useState("홈");

  const onTabClick = (tabName: string) => {
    setSelected(tabName);
  };

  return { selected, onTabClick };
};

export default useMenuSelect;
