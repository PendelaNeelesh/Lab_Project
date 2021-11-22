import react, { createContext, useState } from 'react'
import { useEffect } from 'react'
import { isExpired, decodeToken } from "react-jwt";
export const userContext = createContext()
export const UserProvider = (props) => {
    const [user, setUser] = useState('')
    const [who, setWho] = useState('')
    useEffect(() => {
        let sent = document.cookie.split(';')
        var flag = 0
        var token = ''
        sent.forEach(word => {
            let tok = word.split('=')
            if (tok[0] === " authtoken") {
                flag = 1
                token = tok[1]
            }
        })
        if (flag === 1) {
            setUser(token)
            try {
                setWho(decodeToken(token).who)
            } catch (err) {
                setWho('')
            }
        }
    }, [])
    useEffect(() => {
        let sent = document.cookie.split(';')
        var flag = 0
        var token = ''
        sent.forEach(word => {
            let tok = word.split('=')
            if (tok[0] === " authtoken") {
                flag = 1
                token = tok[1]
            }
        })
        if (flag === 1) {
            setUser(token)
            try {
                setWho(decodeToken(token).who)
            } catch (err) {
                setWho('')
            }
        }
    }, [user, who])
    return (
        <userContext.Provider value={[user, setUser, who, setWho]}>
            {props.children}
        </userContext.Provider>
    )
}