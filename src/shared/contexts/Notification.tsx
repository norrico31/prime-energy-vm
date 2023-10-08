import { useState, createContext, useContext, ReactNode, useEffect } from 'react'

const initState: ToastNotification = {
    type: null,
    title: '',
    msg: ''
}

const NotifContext = createContext<{ type: ToastNotification; setType: React.Dispatch<React.SetStateAction<ToastNotification>> }>({ type: initState, setType: () => null })

export const useNotifCtx = () => useContext(NotifContext)

export default function NotificationProvider({ children }: { children: ReactNode }) {
    const [type, setType] = useState<ToastNotification>(initState);
    // useEffect(() => {
    //     setType({ type: 'download', msg: 'success shit', title: 'Download Success' })
    // }, [])
    return <NotifContext.Provider value={{ type, setType }}>{children}</NotifContext.Provider>
}
