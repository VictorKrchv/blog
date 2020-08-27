// @flow
import * as React from "react";
import styled from "styled-components";

import { Card, H2 } from "../atoms";

export const Sidebar = ({ children }) => (
  <Card>
    <SidebarWrapper>{children}</SidebarWrapper>
  </Card>
);

const SidebarWrapper = styled.div`
  ${H2} {
    margin-top: 0;
  }
`;
