import React, { useState } from "react";
import styled, { css } from "styled-components";

interface Props {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

function RecruitToggle({ toggle, setToggle }: Props) {
  const clickedToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <Container>
      <ToggleBtn onClick={clickedToggle} toggle={toggle}>
        <Circle toggle={toggle} />
      </ToggleBtn>
    </Container>
  );
}

export default RecruitToggle;

const Container = styled.div``;

const ToggleBtn = styled.button<{ toggle: boolean }>`
  width: 43px;
  height: 21px;
  border-radius: 15.5px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (!props.toggle ? "none" : "#6B8CFF")};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;

const Circle = styled.div<{ toggle: boolean }>`
  background-color: white;
  width: 14px;
  height: 14px;
  border-radius: 50px;
  position: absolute;
  left: 5%;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.toggle &&
    css`
      transform: translate(25px, 0);
      transition: all 0.5s ease-in-out;
    `}
`;
