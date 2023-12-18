import { useState, createContext, useContext, ReactNode } from 'react'

const AuthUserContext = createContext<{
    user?: TUser,
    setUser: React.Dispatch<React.SetStateAction<TUser | undefined>>
    mapPermission: Map<string, TPermission>
}>({
    user: undefined,
    setUser: () => undefined,
    mapPermission: new Map()
})

export const useAuthUser = () => useContext(AuthUserContext)

export default function AuthUserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<TUser | undefined>(undefined)
    const mapPermission = new Map(user?.role.permissions.sort((a, b) => a?.name < b?.name ? -1 : 1).map((p) => [`${p.name} - ${p.description}`, p]))
    return <AuthUserContext.Provider value={{ user, setUser, mapPermission }}>{children}</AuthUserContext.Provider>
}