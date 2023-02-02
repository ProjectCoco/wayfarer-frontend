import React, { useEffect, useState } from "react";
import { HeaderMenus } from "../../components/common/Header/Header";

const useMenuSelect = (pathname: string) => {
  const [selected, setSelected] = useState("홈");

  const onTabClick = (tabName: string) => {
    setSelected(tabName);
  };

  useEffect(() => {
    if (pathname) {
      setSelected(
        HeaderMenus.filter((menu) => pathname.includes(menu.route))[0].name
      );
    }
  }, []);

  return { selected, setSelected, onTabClick };
};

export default useMenuSelect;
