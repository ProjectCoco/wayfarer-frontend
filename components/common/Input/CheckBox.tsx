import React, { useId } from "react";
import styled from "styled-components";

interface Props {
  checked: boolean;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CheckBox({ checked, name, onChange }: Props) {
  return (
    <Block>
      <input
        type="checkbox"
        id={name}
        checked={checked}
        name={name}
        onChange={onChange}
      />
      <label htmlFor={name}></label>
    </Block>
  );
}

export default CheckBox;

const Block = styled.div`
  width: fit-content;
  height: 20px;

  input[type="checkbox"] {
    display: none;
    width: 20px;
    height: 20px;
  }

  label {
    width: 20px;
    height: 20px;
    border: solid 1px black;
    display: inline-block;
    cursor: pointer;
    border-radius: 50%;
  }

  input[type="checkbox"]:checked + label {
    background-color: black;
    transition: all 0.2s ease-in-out;
  }

  input[type="checkbox"]:checked + label:after {
    content: "✔";
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 11px;
  }
`;
