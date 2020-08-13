import { registerUser } from "../../../api/sessions";
import {
  createEvent,
  createStore,
  createStoreObject,
  createEffect,
} from "effector";

export const emailChanged = createEvent();
export const $email = createStore("").on(
  emailChanged,
  (_, e) => e.target.value
);

export const passwordChanged = createEvent();
export const $password = createStore("").on(
  passwordChanged,
  (_, e) => e.target.value
);

const $form = createStoreObject({
  email: $email,
  password: $password,
});

export const formSubmitted = createEvent();

formSubmitted.watch(() => {
  const form = $form.getState();
  registerUserData({ ...form });
});

const registerUserData = createEffect({
  async handler(registerData) {
    try {
      const response = await registerUser(registerData);
      return response;
    } catch (e) {
      return e;
    }
  },
});

registerUserData.doneData.watch((response) => {
  console.log(response, "donedata");
});

registerUserData.failData.watch(({ response }) => {
  console.log(response, "failData");
});
