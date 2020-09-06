import { registerUser } from "../../../api/sessions";
import {
  createEvent,
  createEffect,
  createStore,
} from "effector";
import { setSession } from "../../../features/common/session";
import { tokenChanged } from "../../../features/common/token";


export const formSubmitted = createEvent();
export const $errorMessage = createStore(null)

formSubmitted.watch((form) => registerUserData({ ...form }));
const registerUserData = createEffect()
registerUserData.use((registerData) => registerUser(registerData))


registerUserData.doneData.watch((response) => {
  
});

$errorMessage.on(registerUserData.failData, (_, res) => res.response.data.message)

export const clearError = createEvent()
$errorMessage.reset(clearError)