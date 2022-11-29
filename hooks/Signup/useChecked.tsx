import React, { useState } from "react";

function useChecked() {
  const [check, setCheck] = useState({
    all: false,
    check1_required: false,
    check2_required: false,
    check3: false,
  });

  const handleAllCheck = () => {
    if (!check.all) {
      setCheck({
        all: true,
        check1_required: true,
        check2_required: true,
        check3: true,
      });
    } else {
      setCheck({
        all: false,
        check1_required: false,
        check2_required: false,
        check3: false,
      });
    }
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    console.log(name, checked);
    setCheck({
      ...check,
      [name]: checked,
    });
  };

  return {
    check,
    handleCheck,
    handleAllCheck,
  };
}

export default useChecked;
