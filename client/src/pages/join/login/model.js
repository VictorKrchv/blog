import {
  createEvent,
  createEffect,
  createStore,
} from "effector";
import { loginUser } from "../../../api/sessions";
import { tokenChanged } from "../../../features/common/token";
import { setSession } from "../../../features/common/session";


export const formSubmitted = createEvent();
export const $errorMessage = createStore(null)

formSubmitted.watch((form) => loginUserData({ ...form }))

const loginUserData = createEffect();
loginUserData.use((loginData) => loginUser(loginData));

loginUserData.done.watch((response) => {
  const { token, userId, email } = response.result.data;
  tokenChanged(token);
  setSession({ userId, email });
});

$errorMessage.on(loginUserData.failData, (_, res) => res.response.data.message)

export const clearError = createEvent()
$errorMessage.reset(clearError)