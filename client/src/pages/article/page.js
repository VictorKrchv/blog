import * as React from "react";
import { useParams } from "react-router";
import { ArticlesCommonTemplate } from "../../features/articles/templates/common";
import { H2, Typography } from "../../ui";
import { getArticle, $article, pageUnmounted } from "./model";
import { useStore } from "effector-react";
import { Preloader } from "../../ui/atoms/preloader";

export const ArticlePage = () => {
  const id = useParams().id;

  React.useEffect(() => {
    getArticle(id);
    return pageUnmounted
  }, []);

  const article = useStore($article);

  if (!article) {
    return (
      <ArticlesCommonTemplate>
          <Preloader/>
      </ArticlesCommonTemplate>
    );
  }

  return (
    <ArticlesCommonTemplate>
      <H2 margin="0 0 10px 0">{article.title}</H2>
      <Typography margin="0 0 10px 0">{article.content}</Typography>
      <hr />
      <i>
        <b>{article.author.email}</b> at (some data)
      </i>
    </ArticlesCommonTemplate>
  );
};
