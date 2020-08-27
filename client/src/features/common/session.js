import { createStore, createEffect, createEvent } from "effector";
import { getCurrentAccount } from "../../api/sessions";
import { $token, tokenDropped } from "./token";

export const loadSession = createEffect();
loadSession.use(() => {
  if ($token.getState()) {
    return getCurrentAccount();
  }
  return Promise.reject();
});

export const setSession = createEvent();
export const deleteSession = createEvent();

export const $session = createStore(null)
  .on(loadSession.doneData, (_, result) => {
    return { ...result.data };
  })
  .on(loadSession.failData, (_, result) => {
    tokenDropped();
  });

$session
  .on(setSession, (_, data) => {
    return { ...data };
  })
  .on(deleteSession, () => {
    return null;
  });

export const $isAuthenticated = $session.map((session) => session !== null);
