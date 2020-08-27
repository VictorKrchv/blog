import { createEvent, createStore } from "effector"

export const tokenChanged = createEvent()
export const tokenDropped = createEvent()

export const $token = createStore(localStorage.getItem('token'))

$token.on(tokenChanged, (_, token) => {
    localStorage.setItem('token', token)
    return token
})
$token.on(tokenDropped, () => {
    localStorage.removeItem('token')
    return null
})