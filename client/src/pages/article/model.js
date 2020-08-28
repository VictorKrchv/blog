import { createEvent, createEffect, createStore } from "effector";
import { articlesApi } from "../../api/articles";



export const $article = createStore(null)
export const getArticle = createEvent()
getArticle.watch((id) => {
    return getArticleData(id)
})

const getArticleData = createEffect()
getArticleData.use((id) => {
    return articlesApi.getById(id)
})

$article.on(getArticleData.doneData, (_, res) => {
    const {author, content, title} = res.data.article
    return {author, content, title}
})

export const pageUnmounted = createEvent()
$article.reset(pageUnmounted)