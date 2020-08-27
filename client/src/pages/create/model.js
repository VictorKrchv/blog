import { articlesApi } from "../../api/articles";

const {
  createStore,
  createEvent,
  createStoreObject,
  createEffect,
} = require("effector");

export const $title = createStore("");
export const $content = createStore("");

export const titleChanged = createEvent();
export const contentChanged = createEvent();

$title.on(titleChanged, (_, e) => e.target.value);
$content.on(contentChanged, (_, e) => e.target.value);

const $form = createStoreObject({
  title: $title,
  content: $content,
});

export const formSubmitted = createEvent();

formSubmitted.watch(() => {
  createArticle($form.getState())
});

const createArticle = createEffect();
createArticle.use((data) => {
  return articlesApi.create(data);
});


