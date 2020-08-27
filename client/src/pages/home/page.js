import * as React from "react";
import { H2, Card } from "../../ui";
import { Row, Col } from "../../lib/styled-components-layout";
import styled from "styled-components";
import { HomeCommonTemplate } from "../../features/home/templates/common";
import {getArticles, $articles} from "./model"
import { useStore } from "effector-react";
import { Articles } from "../../features/organism/articles";

export const HomePage = () => {

  React.useEffect(() => {
    getArticles()
  }, [])
  
  const articles = useStore($articles)

  return (
    <HomeCommonTemplate sidebar={<Sidebar />}>
      <MainTitle>
        <H2>V-TEME</H2>
      </MainTitle>
      <Articles articles={articles}/>
    </HomeCommonTemplate>
  );
};

const MainTitle = styled.div`
  margin: 0 auto;
  padding: 5px 10px;
  display: inline-block;
  color: var(--primary-text);
  opacity: 0.8;
  border: 2px solid var(--dark-red);
`;

const Sidebar = () => (
  <Col gap="1rem">
    <Row>
      <H2 narrow>Latest cards</H2>
    </Row>
    <Row>To find useful cards use search field</Row>
  </Col>
);
