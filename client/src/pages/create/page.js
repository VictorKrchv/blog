import * as React from "react";
import { H2, Button } from "../../ui";
import { TitleInput } from "../../features/articles/atoms/title-input";
import styled from "styled-components";
import { ArticlesCommonTemplate } from "../../features/articles/templates/common";
import { ContentInput } from "../../features/articles/atoms/textarea";
import { useStore } from "effector-react";
import { $title, contentChanged, $content, titleChanged, formSubmitted } from "./model";

export const CreateArticlePage = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    formSubmitted()
  }


  return (
    <ArticlesCommonTemplate sidebar={<SideBar />}>
      <H2 margin="0 0 10px 0">Create Article</H2>
      <form onSubmit={handleSubmit}>
        <Title />
        <Content />
        <Button type="submit" width="160px">Create</Button>
      </form>
    </ArticlesCommonTemplate>
  );
};

const Title = () => {
  const title = useStore($title);
  return (
    <TitleInput
      label="Title of your article"
      name="title"
      autoComplete="title"
      placeholder="Write your title here"
      value={title}
      onChange={titleChanged}
    />
  );
};

const Content = () => {
  const content = useStore($content);
  return (
    <ContentInput
      label="Content"
      placeholder="Write your content here"
      onChange={contentChanged}
    />
  );
};

const SideBar = () => {
  return <div>1232131</div>;
};
