import React, { forwardRef } from "react";
import styled from "styled-components";

interface AtomOverlayProps {
  visible: boolean;
}

const AtomOverlay = forwardRef<HTMLDivElement, AtomOverlayProps>(
  ({ visible = false }: AtomOverlayProps, ref) => {
    return <>{visible && <Fill ref={ref} />}</>;
  }
);

AtomOverlay.displayName = "AtomOverlay";

export default AtomOverlay;

const Fill = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;
