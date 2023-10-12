import { useState } from 'react'
import { useSearchParams } from "react-router-dom";


export const useDebounceSearch = () => {
    const [searchParams, setSearchParams] = useSearchParams({ search: '' })
    const search = searchParams.get('search')
    const [searchQuery, setSearchQuery] = useState(search);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value
        setSearchQuery(query)
        setTimeout(() => {
            setSearchParams(prev => {
                if (query === prev.get('search')) prev
                prev.set('search', query)
                return prev
            })
        }, 500)
    }

    return [searchParams.get('search') as string, searchQuery!, onChange] as const
}
