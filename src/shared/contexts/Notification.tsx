import { useState, createContext, useContext, ReactNode } from 'react'

const initState: ToastNotification = {
    type: null,
    title: '',
    msg: ''
}

const NotifContext = createContext<{ type: ToastNotification; setType: React.Dispatch<React.SetStateAction<ToastNotification>> }>({ type: initState, setType: () => null })

export const useNotifCtx = () => useContext(NotifContext)

export default function NotificationProvider({ children }: { children: ReactNode }) {
    const [type, setType] = useState<ToastNotification>(initState);
    return <NotifContext.Provider value={{ type, setType }}>{children}</NotifContext.Provider>
}
