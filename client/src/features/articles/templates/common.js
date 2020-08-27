import React from "react";
import { Header } from "../../common/header";
import { Container, MainTemplate, SideBarTemplate } from "../../../ui";

export const ArticlesCommonTemplate = ({ children, sidebar }) => {
  return (
    <MainTemplate header={<Header />} footer={null}>
      <Container>
        <SideBarTemplate sidebar={sidebar}>{children}</SideBarTemplate>
      </Container>
    </MainTemplate>
  );
};
