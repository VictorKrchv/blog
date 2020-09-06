import React from "react";
import styled from "styled-components";

export const Alert = ({ message, close }) => {
  return <AlertNative onClick={close}>{message}</AlertNative>;
};

const AlertNative = styled.div`
  width: 100%;
  text-align: center;
  margin: 10px 0;
  font-size: 18px;
  border-radius: 5px;
  padding: 10px;
  background-color: rgba(244, 67, 54, 0.7); /* Red */
  color: #a10b00;
  letter-spacing: 1px;
`;
