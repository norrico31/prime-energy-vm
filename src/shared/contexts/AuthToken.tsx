import { useState, useContext, createContext, ReactNode } from "react";

const AuthToken = createContext<{ token: string | null; setToken: React.Dispatch<string | null> }>({
    token: null,
    setToken: () => null
})

export const useAuthToken = () => useContext(AuthToken)

export default function AuthTokenProvider({ children }: { children: ReactNode }) {
    const [token, setToken] = useState(() => {
        const tokenFromStorage = localStorage.getItem('token')
        if (tokenFromStorage != null) return JSON.parse(tokenFromStorage)
        return null
    });
    return <AuthToken.Provider value={{ token, setToken }}>{children}</AuthToken.Provider>
}