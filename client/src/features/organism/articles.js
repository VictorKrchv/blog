import React from "react";
import styled from "styled-components";
import { H2, Link, Card } from "../../ui";

export const Articles = ({ articles }) => {
  return (
    <ArticlesContainer>
      {articles.map((article) => (
        <Article
          key={article._id}
          title={article.title}
          content={article.content}
          id={article._id}
        />
      ))}
    </ArticlesContainer>
  );
};

const Article = ({ title, content, id }) => {
  return (
    <Card margin="0 0 10px 0">
      <H2 margin="0 0 10px 0">
        <Link to={`/article/${id}`}>{title}</Link>
      </H2>
      <p>{content}</p>
    </Card>
  );
};


const ArticlesContainer = styled.div`
  text-align: left;
`;
