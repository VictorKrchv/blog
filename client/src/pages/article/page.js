import * as React from "react";
import { useParams, Redirect } from "react-router";
import { ArticlesCommonTemplate } from "../../features/articles/templates/common";
import { H2, Typography, Button, RemoveIcon } from "../../ui";
import { getArticle, $article, pageUnmounted, deleteArticle, $redirect } from "./model";
import { useStore } from "effector-react";
import { Preloader } from "../../ui/atoms/preloader";
import styled from "styled-components";

export const ArticlePage = () => {
  const id = useParams().id;

  React.useEffect(() => {
    getArticle(id);
    return pageUnmounted;
  }, []);

  const article = useStore($article);
  
  const redirectURL = useStore($redirect)
  if (redirectURL) {
    return <Redirect to={redirectURL} />;
  }

  if (!article) {
    return (
      <ArticlesCommonTemplate>
        <Preloader />
      </ArticlesCommonTemplate>
    );
  }

  return (
    <ArticlesCommonTemplate>
      <ArticleHeader>
        <H2>{article.title}</H2>
        <RemoveIcon handleClick={deleteArticle} />
      </ArticleHeader>
      <Typography margin="0 0 10px 0">{article.content}</Typography>
      <hr />
      <i>
        <b>{article.author.email}</b> at (some data)
      </i>
    </ArticlesCommonTemplate>
  );
};

const ArticleHeader = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`;
