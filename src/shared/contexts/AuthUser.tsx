import { useState, createContext, useContext, ReactNode } from 'react'
import { GET, POST } from '../../shared/utils/fetch'

const AuthUserContext = createContext<{
    user?: TUser,
    token: string | null
    setToken: React.Dispatch<string | null>
    setUser: React.Dispatch<React.SetStateAction<TUser | undefined>>
    fetchUserData: (signal?: AbortSignal) => Promise<unknown>
    mapPermission: Map<string, TPermission>
    logout(evt: React.MouseEvent): void
}>({
    user: undefined,
    token: null,
    fetchUserData: async () => undefined,
    mapPermission: new Map(),
    logout: () => null,
    setToken: () => null,
    setUser: () => undefined
})

export const useAuthUser = () => useContext(AuthUserContext)

export default function AuthUserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<TUser | undefined>(undefined)
    const [token, setToken] = useState(() => {
        const tokenFromStorage = localStorage.getItem('token')
        if (tokenFromStorage != null) return JSON.parse(tokenFromStorage) as string
        return null
    });
    const mapPermission = new Map(user?.role.permissions.sort((a, b) => a?.name < b?.name ? -1 : 1).map((p) => [`${p.name} - ${p.description}`, p]))

    async function fetchUserData(signal?: AbortSignal) {
        try {
            const data = await GET<ApiData<TUser>>(`/auth_user`, signal!)
            setUser(data?.data)
            return data
        } catch (err) {
            const error = err as ApiError
            if (error?.message === 'Unauthorized') {
                setUser(undefined)
                setToken(null)
                localStorage.clear()
            }
            return err
        }
    }

    function logout(evt: React.MouseEvent) {
        evt.stopPropagation()
        evt.preventDefault()
        POST('/logout', {})
            .finally(() => {
                setUser(undefined)
                setToken(null)
                localStorage.clear()
            })
    }
    return <AuthUserContext.Provider value={{ user, token, mapPermission, fetchUserData, logout, setToken, setUser }}>{children}</AuthUserContext.Provider>
}