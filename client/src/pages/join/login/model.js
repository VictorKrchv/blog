import {
  type,
  createStore,
  createEvent,
  createStoreObject,
  createEffect,
} from "effector";
import { loginUser } from "../../../api/sessions";
import { tokenChanged } from "../../../features/common/token";
import { setSession } from "../../../features/common/session";

export const emailChanged = createEvent();
export const $email = createStore("").on(
  emailChanged,
  (_, event) => event.target.value
);

export const passwordChanged = createEvent();
export const $password = createStore("").on(
  passwordChanged,
  (_, event) => event.target.value
);

export const $form = createStoreObject({
  email: $email,
  password: $password,
});

export const formSubmitted = createEvent();
export const formUnmounted = createEvent()

$password.reset(formUnmounted)
$email.reset(formUnmounted)

formSubmitted.watch(() => {
  const form = $form.getState();
  loginUserData({ ...form });
});

const loginUserData = createEffect();
loginUserData.use((loginData) => {
  return loginUser(loginData);
});

loginUserData.done.watch((response) => {
  const { token, userId, email } = response.result.data;
  tokenChanged(token);
  setSession({ userId, email });
});
