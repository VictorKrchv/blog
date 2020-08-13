import {
  type,
  createStore,
  createEvent,
  createStoreObject,
  createEffect,
} from "effector";
import { loginUser } from "../../../api/sessions";

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

formSubmitted.watch(() => {
  const form = $form.getState();
  loginUserData({ ...form });
});

const loginUserData = createEffect({
  async handler(loginData) {
    const req = await loginUser(loginData);
    console.log(req);
  },
});
