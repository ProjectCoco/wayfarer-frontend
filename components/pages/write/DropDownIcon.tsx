import React from "react";
import Image from "next/image";
import downImageSrc from "../../../public/common/btn_dropdown.svg";

function DropDownIcon() {
  return <Image src={downImageSrc} alt={"dropdownIcon"} />;
}

export default DropDownIcon;
