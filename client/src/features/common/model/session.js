import { createStore, createEffect } from "effector";
import { getCurrentAccount } from "../../../api/sessions";

export const loadSession = createEffect();
loadSession.use(() => {
    return getCurrentAccount()
});

export const $session = createStore(null)
  .on(loadSession.doneData, (state, result) =>
    console.log(state, result, "SESSION DONE")
  )
  .on(loadSession.failData, (_, {...result}) =>
    console.log(_, result, "failData")
  );
