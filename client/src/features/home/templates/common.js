import React from "react";
import { Container, MainTemplate, SideBarTemplate } from "../../../ui";
import { Header } from "../../common/header";

export const HomeCommonTemplate = ({ children, sidebar }) => {
  return (
    <MainTemplate header={<Header />} footer={null}>
      <Container>
        <SideBarTemplate 
        sidebar={sidebar}
        >
          {children}
        </SideBarTemplate>
      </Container>
    </MainTemplate>
  );
};

