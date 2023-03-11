import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import AtomInput, {
  AtomInputProps,
} from "@/components/atoms/AtomInput/AtomInput";
import AtomInputLabel, {
  AtomInputLabelProps,
} from "@/components/atoms/AtomInputLabel/AtomInputLabel";
import ArrowIcon from "@/public/common/btn_dropdown.svg";

interface MoleculeInputProps extends AtomInputProps, AtomInputLabelProps {
  title: string;
  rightIcon?: boolean;
}

const MoleculeInput = ({
  title,
  rightIcon = false,
  asterisk = false,
  ...props
}: MoleculeInputProps) => {
  const [focus, setFocus] = useState(false);

  const handleFocus = useCallback((value: boolean) => {
    setFocus(value);
  }, []);

  return (
    <Block onFocus={() => handleFocus(true)} onBlur={() => handleFocus(false)}>
      <AtomInputLabel title={title} asterisk />
      <AtomInput {...props} />
      {rightIcon && (
        <RightIconBox focus={focus}>
          <Image src={ArrowIcon} alt="right-arrow icon" />
        </RightIconBox>
      )}
    </Block>
  );
};

export default MoleculeInput;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
`;

const RightIconBox = styled.div<{ focus?: boolean }>`
  position: absolute;
  bottom: 10px;
  right: 0;

  transform: ${({ focus }) => (focus ? "rotate(180deg)" : null)};
  transition: 0.2s;
`;
