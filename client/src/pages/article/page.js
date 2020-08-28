import * as React from "react";
import { useParams } from "react-router";
import { ArticlesCommonTemplate } from "../../features/articles/templates/common";


export const ArticlePage = () => {
    const id = useParams().id
    return (
        <ArticlesCommonTemplate>
            <div>{id}</div>
        </ArticlesCommonTemplate>
    )
}