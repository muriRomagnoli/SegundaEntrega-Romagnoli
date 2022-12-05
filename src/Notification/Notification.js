import './Notification.css'
import { createContext, useState, useContext } from 'react'

const Notification = ({ msg, severity }) => {

    if (msg === '') return

    return (
        <div className={severity === 'success' ? 'notificationSuccess' : 'notificationError'}>
            <h4>{msg}</h4>
        </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')

    const setNotification = (msg, severity) => {
        setMessage(msg)
        setSeverity(severity)
        setTimeout(() => {
            setMessage('')
        }, 2500)
    }

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification msg={message} severity={severity}></Notification>
            {children}
        </NotificationContext.Provider>
    )
}


export const useNotification = () => {
    return useContext(NotificationContext)
}