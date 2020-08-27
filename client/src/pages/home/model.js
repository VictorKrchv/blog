const { createStore, createEffect, createEvent } = require("effector");
const { articlesApi } = require("../../api/articles");

export const $articles = createStore([]);
export const getArticles = createEvent();

getArticles.watch(() => {
    getArticlesData()
});

const getArticlesData = createEffect()
getArticlesData.use(() => {
    return articlesApi.getLatest()
})

$articles.on(getArticlesData.doneData, (_, data) => {
    return data.data.articles
})
