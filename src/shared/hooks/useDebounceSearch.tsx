import { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom";


export const useDebounceSearch = () => {
    const [searchParams, setSearchParams] = useSearchParams({ search: '' })
    const search = searchParams.get('search')
    const [debounceSearch, setDebounceSearch] = useState(search);

    useEffect(() => {
        if (search === debounceSearch) return
        const t = setTimeout(() => {
            setDebounceSearch(searchParams.get('search'))
        }, 500)
        return () => clearTimeout(t)
    }, [searchParams])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value
        setSearchParams(prev => {
            prev.set('search', query)
            return prev
        })
    }
    return [debounceSearch!, searchParams.get('search') as string, onChange] as const
}
