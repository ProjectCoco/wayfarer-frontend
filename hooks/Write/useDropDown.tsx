import React, { useEffect, useState } from "react";

function useDropDown() {
  const [isDrop, setIsDrop] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsDrop(false);
    }
  };

  const handleChangeDrop = (value?: boolean) => {
    if (value) {
      setIsDrop(value);
      return;
    }
    setIsDrop((pre) => !pre);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return {
    isDrop,
    ref,
    handleChangeDrop,
  };
}

export default useDropDown;
