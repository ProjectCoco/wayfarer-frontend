import React, { useEffect, useState } from "react";

const useHeaderScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) setIsScrolled(true);
      else setIsScrolled(false);
    });

    return () => window.removeEventListener("scroll", () => {});
  }, []);

  return { isScrolled };
};

export default useHeaderScroll;
