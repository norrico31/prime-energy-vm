import { useState, createContext, useContext, ReactNode } from 'react'

const AuthUserContext = createContext<{
    user?: TUser,
    setUser: React.Dispatch<React.SetStateAction<TUser | undefined>>
}>({
    user: undefined,
    setUser: () => undefined
})

export const useAuthUser = () => useContext(AuthUserContext)

export default function AuthUserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<TUser | undefined>(undefined)
    return <AuthUserContext.Provider value={{ user, setUser }}>{children}</AuthUserContext.Provider>
}