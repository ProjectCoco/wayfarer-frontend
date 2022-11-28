import React, { useId } from "react";
import styled from "styled-components";

function CheckBox() {
  const Id = useId();
  return (
    <Block>
      <input type="checkbox" id={Id} defaultChecked={true} />
      <label htmlFor={Id}></label>
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
