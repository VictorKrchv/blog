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
    const {author, content, title, _id: id} = res.data.article
    return {author, content, title, id}
})

export const deleteArticle = createEvent()
deleteArticle.watch(() => {
    return deleteArticleData($article.getState().id) 
})


const deleteArticleData = createEffect()
deleteArticleData.use((id) => {
    return articlesApi.deleteData(id)
})

export const $redirect = createStore(null)
$redirect.on(deleteArticleData.doneData, () => {
    return `/`
})


export const pageUnmounted = createEvent()
$article.reset(pageUnmounted)
$redirect.reset(pageUnmounted)

