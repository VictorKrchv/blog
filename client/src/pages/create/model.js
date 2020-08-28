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

export const pageUnmounted = createEvent();
$title.reset(pageUnmounted);
$content.reset(pageUnmounted);

export const formSubmitted = createEvent();

formSubmitted.watch(() => {
  createArticle($form.getState());
});

const createArticle = createEffect();
createArticle.use((data) => {
  return articlesApi.create(data);
});

export const $redirect = createStore(null);
$redirect.on(createArticle.doneData, (_, response) => {
  return `/article/${response.data.article._id}`
});
$redirect.reset(pageUnmounted)
