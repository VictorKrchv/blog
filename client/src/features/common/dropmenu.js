import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../ui";

export const DropMenu = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropMenuBox>
      <Button onClick={() => setIsOpen(!isOpen)}>{title} &#9660;</Button>
      {isOpen ? <DropMenuContent>{children}</DropMenuContent> : null}
    </DropMenuBox>
  );
};

const DropMenuBox = styled.div`
  position: relative;
  display: inline-block;
`;

const DropMenuContent = styled.div`
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  & > * {
    font-size: 16px;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;

    &:hover {
      text-decoration: none;
      background-color: #ddd;
    }
  }
`;
