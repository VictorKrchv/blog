import { useStore } from "effector-react"
import { useEffect } from "react"
import { createStore } from "effector"
import { $token } from "./model/token"
import { $session, loadSession } from "./model/session"



export const AccountLoader = ({children}) => {

    const token = useStore($token)
    const session = useStore($session)
        
    useEffect(() => {
        loadSession()
    }, [])

    if (token && !session) return null

    return children
}