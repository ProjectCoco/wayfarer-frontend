import React from "react";
import styled from "styled-components";
import { occupationColor } from "./CommunityCard";

const AuthorOccupationTag = ({ occupation }: { occupation: string }) => {
  return <OccupationTag occupation={occupation}>{occupation}</OccupationTag>;
};

export default AuthorOccupationTag;

const OccupationTag = styled.div<{ occupation: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 9px;
  height: 26px;
  background-color: ${(props) => props.theme.colors.gray100};
  border-radius: 2px;
  color: ${(props) => occupationColor[props.occupation].profile};
`;
