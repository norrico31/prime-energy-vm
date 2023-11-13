import { useState, createContext, useContext, ReactNode } from 'react'

const AuthUserContext = createContext<{
    user?: User,
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>
}>({
    user: undefined,
    setUser: () => undefined
})

export const useAuthUser = () => useContext(AuthUserContext)

export default function AuthUserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | undefined>(undefined)
    return <AuthUserContext.Provider value={{ user, setUser }}>{children}</AuthUserContext.Provider>
}