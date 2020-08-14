import { createEvent, createStore } from "effector"

export const tokenChanged = createEvent()
export const tokenDropped = createEvent()

export const $token = createStore(localStorage.getItem('token'))

$token.on(tokenChanged, (_, token) => token)
$token.on(tokenDropped, () => null)