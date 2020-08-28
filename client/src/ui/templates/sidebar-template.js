import * as React from "react";
import styled from "styled-components";
import { Card } from "../atoms";

export const SideBarTemplate = ({ sidebar, children, footer }) => {
  return (
    <>
      <SidebarContainer>
        <Main><Card>{children}</Card></Main>
        <Sidebar><Card>{sidebar}</Card></Sidebar>
      </SidebarContainer>
      {footer && <Footer>{footer}</Footer>}
    </>
  );
};

const SidebarContainer = styled.div`
  height: 100%;
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0;
  flex-direction: row;
`;

const Main = styled.main`
  width: 67%;
`;

const Sidebar = styled.aside`
  width: 30%;
`;

const Footer = styled.footer``;
